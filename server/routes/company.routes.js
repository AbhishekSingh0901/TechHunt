import express from "express";
import { isAuthorized } from "../middlewares/isAuth.js";
import {
  getCompany,
  getCompanyById,
  registerCompany,
  updateCompany,
} from "../controllers/company.controller.js";

const router = express.Router();

router.post("/register", isAuthorized, registerCompany);
router.get("/get-company", isAuthorized, getCompany);
router.get("/get-company/:id", isAuthorized, getCompanyById);
router.put("/update/:id", isAuthorized, updateCompany);

export default router;
