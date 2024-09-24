import mongoose from "mongoose";
const userSechma = new mongoose.Schema(
  {
    fullName: {
      tyype: "string",
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    email: {
      type: "string",
      required: true,
      unique: true,
    },
    phonenumber: {
      type: "string",
      required: true,
      unique: true,
      validate: {
        validator: (value) => value.length === 10,
        message: "Phone number must be 10 digits long.",
      },
    },
    role: {
      type: "string",
      enum: ["job seeker", "reqruiter"],
    },
    profile: {
      bio: { type: "string", required: true },
      skills: [{ type: "string" }],
      resumeURIs: [
        {
          title: { type: "String" },
          uri: { type: "stirng" },
        },
      ],
      company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
        required: true,
      },
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSechma);
