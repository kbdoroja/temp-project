import dotenv from 'dotenv';  
dotenv.config();  
import mongoose from 'mongoose';
import express from 'express';
import router from './router.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// mount the router
app.use('/api', router);

// test
console.log("Mongo URI:", process.env.MONGO_URI);  

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));


app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server started at port http://localhost:3000");
    }
});