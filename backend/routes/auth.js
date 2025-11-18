// import express from "express";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcryptjs";
// import User from "../models/User.js";

// const router = express.Router();

// // Reset Password Route
// router.post("/reset-password/:token", async (req, res) => {
//   try {
//     const token = req.params.token;
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     const user = await User.findById(decoded.id);
//     if (!user) return res.status(404).json({ message: "User not found" });

//     const { password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);

//     user.password = hashedPassword;
//     await user.save();

//     return res.json({ message: "Password updated successfully" });

//   } catch (err) {
//     console.error(err);
//     return res.status(400).json({ message: "Invalid or expired token" });
//   }
// });

// export default router;
