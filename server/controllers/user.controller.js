import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { sendToken } from "../utils/jwtToken.js";

export const register = async (req, res) => {
  console.log(req);
  try {
    const { fullName, email, password, phoneNumber, role } = req.body;
    if (!fullName || !email || !password || !role || !phoneNumber) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }

    let user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ message: "Email already exists", success: false });
    }

    user = await User.create({
      fullName,
      email,
      password,
      role,
      phoneNumber,
    });
    sendToken(user, 201, res, `Account created successfully`);
  } catch (err) {
    console.log(err);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    //validate all fields are present
    if (!email || !password || !role) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }

    // validate role
    let user = await User.findOne({ email, role });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Invalid credentials", success: false });
    }

    //validate password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "Invalid credentials", success: false });
    }

    //generate and send jwt token
    sendToken(user, 200, res, `Welcome back ${user.fullName}`);
  } catch (err) {
    console.log(err);
  }
};

export const logout = async (req, res) => {
  try {
    res
      .status(200)
      .cookie("token", "", { maxAge: 0 })
      .json({ message: "Logged out successfully", success: true });
  } catch (err) {
    console.log(err);
  }
};

export const updateUserProfile = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, bio, skills } = req.body;
    const file = req.file;

    //* cloudinary setup

    let skillsArray;
    if (skills) {
      skillsArray = skills.split(",").map((skill) => skill.trim());
    }

    const userId = req.id; // middleware authentication
    let user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        message: "User not found.",
        success: false,
      });
    }

    if (fullName) user.fullName = fullName;
    if (email) user.email = email;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (bio) user.profile.bio = bio;
    if (skills) user.profile.skills = skillsArray;

    await user.save();

    res.status(200).json({
      user,
      message: "User profile updated successfully.",
      success: true,
    });
  } catch (err) {
    console.log(err);
  }
};
