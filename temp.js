// lib/dbConnect.js

import mongoose from "mongoose";
import bodyParser from "body-parser";
import Link from "next/link";

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

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
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect () {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
      bufferMaxEntries: 0,
      useFindAndModify: true,
      useCreateIndex: true
    }

    cached.promise = mongoose.connect(MONGODB_URI, opts).then(mongoose => {
      return mongoose
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}

export default dbConnect