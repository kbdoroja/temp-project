// Controller.js implements business logic and mongodb atlas connection

import mongoose from 'mongoose';

// MongoDB Atlas connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.error('Connection error', error.message);
  });

// INSERT HERE SCHEMA DESIGN

// INSERT HERE DATA MANIPULATION

export {}
