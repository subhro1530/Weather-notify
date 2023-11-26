import mongoose from "mongoose";
const MONGODB_URI =
  "mongodb+srv://UniquePratham:LujtTkl879XO1q27@cloudycluster.ygyavyt.mongodb.net/signupdatabase?retryWrites=true&w=majority";
if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside the .env.local"
  );
}
let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { con: null, promise: null };
}
const dbConnect = async () => {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }
  console.log("We are connected to MongoDB");
  return cached.conn;
  // mongoose.connect("mongodb://localhost:27017/signUpDatabase");
  // mongoose.connect(
  //   // `mongodb+srv://${username}:${password}@${cluster}.ygyavyt.mongodb.net/`
  // );
};

export default dbConnect;
