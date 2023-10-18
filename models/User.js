// models/User.js

import mongoose from "mongoose";

// Create a user schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        return /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(value);
      },
      message: "Email must be a valid email id",
    },
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    validate: {
      validator: function (value) {
        return /^\d{10}$/.test(value);
      },
      message: "Phone number must be 10 digits long.",
    },
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
