import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
  userType: { type: String, enum: ['Customer', 'Admin'], required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Email is invalid'],
  },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

export default User;