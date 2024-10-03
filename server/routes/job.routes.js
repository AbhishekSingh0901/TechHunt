import express from "express";
import { isAuthorized } from "../middlewares/isAuth.js";
import {
  getJobByRecruiterId,
  getJobs,
  postJob,
} from "../controllers/job.controller.js";

const router = express.Router();
router.post("/postjob", isAuthorized, postJob);
router.get("/getjobs", isAuthorized, getJobs);
router.get("/getjobsrecruiter", isAuthorized, getJobByRecruiterId);
router.get("/getjob/:id", isAuthorized, getJobByRecruiterId);

export default router;
