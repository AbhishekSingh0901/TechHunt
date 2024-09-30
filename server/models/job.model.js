import mongoose from "mongoose";
const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  description: {
    type: String,
    required: true,
    minlength: 20,
    maxlength: 500,
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  creted_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  experience: {
    type: String,
    required: true,
  },
  applications: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Application",
    },
  ],
});

export const Job = mongoose.model("Job", jobSchema);
