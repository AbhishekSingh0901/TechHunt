import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const isAuthorized = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      console.log("token not found in cookie");
      return res.status(401).json({ msg: "Unauthorized", success: false });
    }

    const decode = await jwt.verify(token, process.env.SECRET_KEY);
    if (!decode) {
      res.status(401).json({ msg: "invalid token", success: false });
    }
    req.id = await User.findById(decode.userId);
    next();
  } catch (err) {
    console.log(err);
  }
};
