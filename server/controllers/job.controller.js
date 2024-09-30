import { Job } from "../models/job.model";

export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      company,
      location,
      salary,
      deadline,
      skills,
      experience,
    } = req.body;
    const userId = req.id;

    if (
      !title ||
      !description ||
      !company ||
      !location ||
      !salary ||
      !deadline ||
      !skills ||
      !experience
    ) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    if (req.id.role !== "recruiter") {
      return res.status(401).json({
        msg: "Only recruiters can update company data",
        success: false,
      });
    }

    const job = await Job.create({
      title,
      description,
      company,
      location,
      salary,
      deadline,
      skills,
      experience,
      created_by: userId,
    });

    res.status(201).json({
      message: "Job created successfully",
      job,
      success: true,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        {
          title: { $regex: keyword, $options: "i" },
        },
        {
          description: { $regex: keyword, $options: "i" },
        },
      ],
    };
    const jobs = await Job.find(query);
    if (!jobs) {
      return res.status(404).json({
        message: "No jobs found",
        success: false,
      });
    }

    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }
    return res.status(200).json({
      job,
      success: true,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getJobByRecruiterId = async (req, res) => {
  try {
    const recruiterId = req.id;
    const jobs = await Job.find({ created_by: recruiterId });
    if (!jobs) {
      return res.status(404).json({
        message: "No jobs found",
        success: false,
      });
    }
    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (err) {
    console.log(err);
  }
};
