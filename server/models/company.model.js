import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    description: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 500,
    },
    website: {
      type: String,
      required: true,
      match: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w.-]*)*\/?$/,
    },
    employees: {
      type: Number,
      required: true,
      min: 1,
      max: 1000,
    },
    logo: {
      type: String,
      // required: true,
      match: /^https?:\/\//,
    },
    location: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Company = mongoose.model("Company", companySchema);
