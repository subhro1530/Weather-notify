// // pages/api/SignUpReq&Res.js

// import dbConnect from "../../utils/dbConnect";
// import User from "../../models/User";

// // Create a route to handle user sign-up
// export default async function signUpfunction(req, res) {
//   const { method } = req;
//   const data = req.body;
//   console.log(data);
//   await dbConnect();
//   try {
//     const user = await User.create(data)
//     res.status(201).json({ success: true, data: user, message: "User signed up successfully" })
//   } catch (error) {
//     res.status(400).json({ success: false, error: "Server error" })
//   }
// };

import dbConnect from "../../utils/dbConnect";
import User from "../../models/User";

export default async function handler(req, res) {
  await dbConnect();

  try {
    const data = req.body;
    console.log(data);
    const check = await User.findOne({ email: data.email });
    if (check) {
      return res.status(406).json({ success: false, error: "Email already registered" });
    } else {
      const user = await User.create(data);
      const savedUser = await user.save();
      res.status(200).json({
        success: true,
        data: savedUser,
        message: "User created successfully",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Server error" });
  }
  // } else {
  //   res.status(405).json({ success: false, error: "Method not allowed" });
}
