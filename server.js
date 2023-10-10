// server.js

import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

// Your code continues here...

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/my-database');

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
    unique: true, // Ensures that email addresses are unique in the database
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  // You can add more fields as needed for your application
});


// Create a new temperature document with a reference to the user
const newTemperature = new Temperature({
    username: user._id, // Set the username as the user's _id
    mintemp: 10,
    maxtemp: 30,
  });

// Create a user model
const User = mongoose.model("User", userSchema);
const Temp= mongoose.model("newTemperature",userSchema)
app.use(bodyParser.json());

// Create a route to handle user sign-up
app.post("/userSignUp", async (req, res) => {
  try {
    const { firstName, lastName, email, password, phone } = req.body;

    // Validate user input (e.g., check if email is unique, validate password, etc.)

    // Save the user to the database
    const user = new User({
      firstName,
      lastName,
      email,
      phoneNumber: phone, // Assuming you have a "phoneNumber" field in your user schema
      // other user data...
    });

    await user.save();

    res.status(201).json({ message: "User signed up successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Create a route to handle user sign-up
app.post("/userSignin", async (req, res) => {
    try {
      const {  email, password} = req.body;
  
      // Validate user input (e.g., check if email is unique, validate password, etc.)
  
      // Save the user to the database
      const user = await User.findOne({ email });

      if (!user) {
        return  <Link href="/SignUp">Create New Account</Link>;
        
      }
  
      // Compare the provided password with the hashed password in the database
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (passwordMatch) {
        // Passwords match, user is authenticated
        return ;
      } else {
        // Passwords do not match
        return res.status(401).json({ message: "Authentication failed" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  
      
  
      res.status(201).json({ message: "User signed up successfully" });
    } 
  );


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
