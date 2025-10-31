require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./db');

(async () => {
  try {
    await connectDB();
    const db = mongoose.connection.db;
    const cols = await db.listCollections().toArray();
    console.log('Connected to DB. Collections:');
    cols.forEach(c => console.log('- ' + c.name));
    process.exit(0);
  } catch (err) {
    console.error('DB check failed:', err);
    process.exit(1);
  }
})();
