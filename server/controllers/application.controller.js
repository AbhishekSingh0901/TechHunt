import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";

export const applyJob = async (req, res) => {
  try {
    const userId = req.id;
    const { coverLetter, resume_uri } = req.body.coverLetter;
    const jobId = req.params.id;
    if (!jobId) {
      return res
        .status(400)
        .json({ message: "Invalid job ID", success: false });
    }
    // check if user is job seeker
    if (userId.role !== "job seeker") {
      res.status(403).json({
        message: "cannot aplly for jobs with recruiter id",
        success: false,
      });
    }
    // check if user has already applied for the job
    const existingApplication = await Application.findOne({
      job: jobId,
      applicantId: userId,
    });
    if (existingApplication) {
      return res.status(400).json({
        message: "User has already applied for this job",
        success: false,
      });
    }

    //check ifjob exists
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found", success: false });
    }

    const newApplication = await Application.create({
      coverLetter,
      resume_uri,
      job: jobId,
      applicant: userId,
    });

    job.applications.push(newApplication._id);
    await job.save();
    return res.status(200).json({});
  } catch (err) {
    console.log(err);
  }
};

export const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.id;
    const application = await Application.find({ applicant: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        options: { sort: { createdAt: -1 } },
        populate: {
          path: "company",
          options: { sort: { createdAt: -1 } },
        },
      });
    if (!application) {
      return res.status(404).json({
        message: "No Applications",
        success: false,
      });
    }
    return res.status(200).json({
      application,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getApplicants = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate({
      path: "applications",
      options: { sort: { createdAt: -1 } },
      populate: {
        path: "applicant",
      },
    });
    if (!job) {
      return res.status(404).json({
        message: "Job not found.",
        success: false,
      });
    }
    return res.status(200).json({
      job,
      succees: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicationId = req.params.id;
    if (!status) {
      return res.status(400).json({
        message: "status is required",
        success: false,
      });
    }

    // find the application by applicantion id
    const application = await Application.findOne({ _id: applicationId });
    if (!application) {
      return res.status(404).json({
        message: "Application not found.",
        success: false,
      });
    }

    // update the status
    application.status = status.toLowerCase();
    await application.save();

    return res.status(200).json({
      message: "Status updated successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
