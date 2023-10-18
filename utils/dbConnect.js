import mongoose from "mongoose";
const username = encodeURIComponent("UniquePratham");
const password = encodeURIComponent("LujtTkl879XO1q27");
const cluster = "cloudycluster";
const dbConnect = async () =>
  // mongoose.connect("mongodb://localhost:27017/signUpDatabase");
  mongoose.connect(
    `mongodb+srv://${username}:${password}@${cluster}.ygyavyt.mongodb.net/`
  );

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
