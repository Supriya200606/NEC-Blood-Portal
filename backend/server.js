require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./db");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

const app = express();

// ================== MIDDLEWARE ==================
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);

// ================== USER SCHEMA ==================
const userSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  contact: { type: String, required: true },
  DOB: { type: String, required: true },
  bloodType: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const User = mongoose.model("User", userSchema);

// ================== FORM SCHEMA ==================
const formSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  contactnumber: { type: String, required: true },
  email: { type: String, required: true },
  tag: { type: String, required: true },
  bloodType: { type: String, required: true },
  age: { type: Number, required: true },
  weight: { type: Number, required: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const Form = mongoose.model("Form", formSchema);

// ================== AUTH MIDDLEWARE ==================
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Access denied" });

  jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
    if (err) return res.status(403).json({ error: "Invalid token" });
    req.user = user;
    next();
  });
};

// ================== ROUTES ==================

// Register User
app.post("/api/register", async (req, res) => {
  try {
    const { fullname, contact, DOB, bloodType, email, password } = req.body;

    const strongPwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    const hexPwd = /^[a-fA-F0-9]{8,}$/;

    if (!strongPwd.test(password) && !hexPwd.test(password)) {
      return res.status(400).json({
        error:
          "Password must be at least 8 characters and include upper, lower, number, and symbol.",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const user = new User({ fullname, contact, DOB, bloodType, email, password });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login User
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "User not found" });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ error: "Invalid password" });

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_TOKEN,
      { expiresIn: "24h" }
    );

    res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        fullname: user.fullname,
        contact: user.contact,
        DOB: user.DOB,
        bloodType: user.bloodType,
      },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete User
app.delete("/api/delete", authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) return res.status(404).json({ error: "User not found" });

    await Form.deleteMany({ userId });
    res.status(200).json({ message: "User and associated forms deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get Profile
app.get("/api/profile", authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Upload Form
app.post("/api/uploadform", authenticateToken, async (req, res) => {
  try {
    const { fullname, contactnumber, email, tag, bloodType, age, weight, gender, address } = req.body;

    const form = new Form({
      fullname,
      contactnumber,
      email,
      tag,
      bloodType,
      age,
      weight,
      gender,
      address,
      userId: req.user.id,
    });

    const saved = await form.save();
    res.status(201).json({ message: "Form uploaded successfully", form: saved });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get Forms by Tag
app.get("/api/getform", async (req, res) => {
  const { tag } = req.query;
  const forms = await Form.find({ tag });
  res.status(200).json(forms);
});

// Get My Forms
app.get("/api/myforms", authenticateToken, async (req, res) => {
  try {
    const forms = await Form.find({ userId: req.user.id });
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ message: "Error fetching forms", error });
  }
});

// Delete Form
app.delete("/api/deleteform/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const deletedForm = await Form.findByIdAndDelete(id);
    if (!deletedForm) return res.status(404).json({ error: "Form not found" });
    res.status(200).json({ message: "Form deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// ================== FORGOT PASSWORD ==================
const resetTokens = new Map();

app.post("/api/forgot-password", async (req, res) => {
  const { email } = req.body;
  console.log("📩 Forgot password request for:", email);

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });

    const token = crypto.randomBytes(32).toString("hex");
const resetLink = `http://localhost:3000/forgot-password?token=${token}`;

    resetTokens.set(token, { userId: user._id, expires: Date.now() + 15 * 60 * 1000 });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log("📧 Preparing to send mail...");
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);

    try {
      await transporter.verify();
      console.log("✅ SMTP connection successful!");
    } catch (verifyError) {
      console.error("❌ SMTP connection failed:", verifyError);
      return res.status(500).json({ error: "Failed to connect to Gmail SMTP. Check credentials." });
    }

    const mailOptions = {
      from: `"NEC Blood Portal" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Reset Your Password - NEC Blood Portal",
      html: `
        <div style="font-family: Arial, sans-serif; border:1px solid #ddd; padding:20px; border-radius:10px;">
          <h2 style="color:#b91c1c;">Password Reset Request</h2>
          <p>Hello <b>${user.fullname}</b>,</p>
          <p>You requested to reset your password. Click the button below:</p>
          <a href="${resetLink}" 
            style="display:inline-block; background-color:#b91c1c; color:#fff; padding:10px 16px; border-radius:6px; text-decoration:none;">
            Reset Password
          </a>
          <p>This link will expire in 15 minutes.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Reset email sent successfully to:", email);

    res.json({ message: "Password reset link sent to your email." });
  } catch (error) {
    console.error("❌ Forgot password error:", error);
    res.status(500).json({ error: "Failed to send reset email." });
  }
});

app.post("/api/reset-password/:token", async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  console.log("🔑 Password reset attempt for token:", token);

  try {
    const tokenData = resetTokens.get(token);
    if (!tokenData || Date.now() > tokenData.expires) {
      resetTokens.delete(token);
      return res.status(400).json({ error: "Invalid or expired reset link" });
    }

    const user = await User.findById(tokenData.userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    user.password = await bcrypt.hash(password, 10);
    await user.save();

    resetTokens.delete(token);
    console.log("✅ Password successfully updated for user:", user.email);

    res.json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("❌ Reset password error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ================== ADMIN ROUTES ==================
// ================== UPDATE PASSWORD (logged-in user) ==================
// ================== UPDATE PASSWORD (Logged-In User) ==================
app.put("/api/update-password", authenticateToken, async (req, res) => {
  try {
    const { password } = req.body;

    if (!password || password.trim() === "") {
      return res.status(400).json({ error: "Password is required" });
    }

    // ✅ Strong password validation (Optional, you can remove if not needed)
    const strongPwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!strongPwd.test(password)) {
      return res.status(400).json({
        error: "Password must be minimum 8 chars & contain upper, lower, number, symbol",
      });
    }

    // ✅ Hash new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Update password directly in DB
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { password: hashedPassword },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "✅ Password updated successfully!" });
  } catch (err) {
    console.error("Update password error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ================== SERVER HEALTH ==================
app.get("/ping", (req, res) => res.send("pong"));

// ================== TEST EMAIL (TEMPORARY) ==================
app.get("/test-email", async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // send to yourself for test
      subject: "✅ Email Test Working",
      text: "Your Node.js email service is working successfully!",
    });

    res.send("✅ Test email sent successfully! Check your inbox or spam.");
  } catch (error) {
    console.error("❌ Email test error:", error);
    res.status(500).send("❌ Failed to send email. Check console.");
  }
});


// ================== START SERVER ==================
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});
