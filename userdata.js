
import mongoose from "mongoose";

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/my-database');

// Create a user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  uniqueId: {
    type: String,
    required: true
  }
});

//create a temperature schema
const temperatureSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    ref: 'User'
  },
  mintemp: {
    type: Number,
    required: true
  },
  maxtemp: {
    type: Number,
    required: true
  }
});


// Create a user model
const User = mongoose.model('User', userSchema);
// create a temp model
const Temperature = mongoose.model('Temperature', temperatureSchema);


// Create a new user
const user = new User({
  username: 'deep',
  email: 'johndoe@example.com',
  phoneNumber: '+15555555555',
  uniqueId: '1234567890'
});

const Temp= new Temperature({
  username: 'deep',
  mintemp: 10,
  maxtemp:30
})


// Save the user to the database
user.save((err, user) => {
  if (err) {
    console.log(err);
  } else {
    console.log('User saved successfully!');
  }
});

//save the Temp to the database
Temp.save((err,user) => {
  if(err) {
    console.log(err);
  }else {
    console.log('userTemp saved successfully');
  }
})


// Retrieve all users from the database
User.find({}, (err, users) => {
  if (err) {
    console.log(err);
  } else {
    console.log(users);
  }
});

//
Temperature.find({})
  .populate('username') // This will populate the `username` field with the user record
  .exec((err, temperatures) => {
    if (err) {
      console.log(err);
    } else {
      console.log(temperatures);
    }
  });


// Retrieve a specific user from the database
User.findOne({ username: 'johndoe' }, (err, user) => {
  if (err) {
    console.log(err);
  } else {
    console.log(user);
  }
});


//
Temperature.findOne({ _id: '637c3470719c06320f59c35c' })
  .populate('username') // This will populate the `username` field with the user record
  .exec((err, temperature) => {
    if (err) {
      console.log(err);
    } else {
      console.log(temperature);
    }
  });

