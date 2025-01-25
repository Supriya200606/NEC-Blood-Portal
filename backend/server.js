const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors(

  {
    origin: ['https://healthneet.vercel.app/','http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
  }
));
app.options('*', cors()); // For global CORS on all routes



mongoose.connect(process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
      }
)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
      type: String,
      required: true,
    },

    contact: {
      type: String,
      required: true,
    },

  DOB:{
    type: String,
    required: true,
  },
  district:{
    type: String,
    required: true,
  },
  bloodType:{
    type: String,
    required: true,
  },
  gender:{
    type: String,
    required: true,
  },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
      this.password = await bcrypt.hash(this.password, 10);
    }
    next();
  });

const User = mongoose.model('User', userSchema);


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
});

const Form = mongoose.model('Form', formSchema);


// Authentication Middleware
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Access denied' });
  
    jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
      if (err) return res.status(403).json({ error: 'Invalid token' });
      req.user = user;
      next();
    });
  };
  
  // Routes
  app.post('/api/register', async (req, res) => {
    try {
      const { fname, lname, contact ,email, password,DOB,district,bloodType,gender} = req.body;
      const user = new User({ fname, lname, contact ,email, password,DOB,district,bloodType,gender });
      await user.save();
    
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  app.post('/api/login', async (req, res) => {
    try {
      const {email,password} = req.body;
      const user = await User.findOne({ email });
      
      if (!user) {
        return res.status(400).json({ error: 'User not found' });
      }
  
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ error: 'Invalid password' });
      }
  
      const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_TOKEN,
        { expiresIn: '24h' }
      );
  
      res.json({ token, user: { id: user._id, email: user.email } });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  app.get('/api/profile', authenticateToken, async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password');
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
 
        app.post('/api/uploadform', authenticateToken, async (req, res) => {
          try {
            const { fullname, contactnumber, email, tag, bloodType, age, weight, gender, address } = req.body;
            const form = new Form({ fullname, contactnumber, email, tag, bloodType, age, weight, gender, address });
            await form.save();
            res.status(201).json({ message: 'Form uploaded successfully' });
          } catch (error) {
            res.status(400).json({ error: error.message });
          }
        });

        app.get('/api/getform', async (req, res) => {
          const {tag} = req.query;
          const data = await Form.find({tag:tag});
          res.status(200).json(data)
        });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  
});