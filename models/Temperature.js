// models/Temperature.js

import mongoose from "mongoose";

// Create a temp schema
const tempSchema = new mongoose.Schema({
  min_Temp: {
    type: Number,
    required: true,
  },
  max_Temp: {
    type: Number,
    required: true,
  },
  
  // You can add more fields as needed for your application
});

const Temp = mongoose.models.Temperature || mongoose.model('Temperature', tempSchema);

export default Temp;
