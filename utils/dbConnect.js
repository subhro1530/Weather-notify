import mongoose from "mongoose";

const dbConnect = async () =>
  mongoose.connect("mongodb://localhost:27017/signUpDatabase");

// if (!mongoose.connections[0]) {
//   mongoose.connect(MONGODB_URI, {
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true,
//     useNewUrlParser: true,
//   });
// }
console.log("We are connected to MongoDB");

export default dbConnect;
