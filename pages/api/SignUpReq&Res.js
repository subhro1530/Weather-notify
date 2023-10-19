import dbConnect from "../../utils/dbConnect";
import User from "../../models/User";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  await dbConnect();

  try {
    const data = req.body;
    console.log(data);
    const check = await User.findOne({ email: data.email });
    if (check) {
      return res
      .status(406)
      .json({ success: false, error: "Email already registered" });
    } else {
      const hashedPassword = await bcrypt.hash(data.password, 8);
      data.password=`${hashedPassword}`;
      const user = await User.create(data);
      const savedUser = await user.save();
      res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");
      res.status(200).json({
        success: true,
        data: savedUser,
        message: "User created successfully"
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Server error" });
  }
  // } else {
  //   res.status(405).json({ success: false, error: "Method not allowed" });
}
