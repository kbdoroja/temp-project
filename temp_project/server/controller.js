// Controller.js implements business logic and mongodb atlas connection

import mongoose from 'mongoose';

// MongoDB Atlas connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Connection error', err.message));

// INSERT HERE SCHEMA DESIGN

// INSERT HERE DATA MANIPULATION

export {}
