import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (value) => value.length === 10,
        message: "Phone number must be 10 digits long.",
      },
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["job seeker", "recruiter"],
    },
    profile: {
      bio: { type: String },
      skills: [{ type: String }],
      resumeURIs: [
        {
          title: { type: String },
          uri: { type: String },
        },
      ],
      company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
      },
      profilePhoto: {
        type: String,
        default: "",
      },
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.getJWTToken = async function () {
  return await jwt.sign({ userId: this._id }, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });
};
export const User = mongoose.model("User", userSchema);
