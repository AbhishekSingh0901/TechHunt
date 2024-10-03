import express from "express";
import {
  applyJob,
  getApplicants,
  getAppliedJobs,
  updateStatus,
} from "../controllers/application.controller.js";
import { isAuthorized } from "../middlewares/isAuth.js";

const router = express.Router();

router.route("/apply/:id").get(isAuthorized, applyJob);
router.route("/get").get(isAuthorized, getAppliedJobs);
router.route("/:id/applicants").get(isAuthorized, getApplicants);
router.route("/status/:id/update").post(isAuthorized, updateStatus);

export default router;
