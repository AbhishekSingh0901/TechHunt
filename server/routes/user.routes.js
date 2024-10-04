import express from "express";
import {
  login,
  logout,
  register,
  updateUserProfile,
} from "../controllers/user.controller.js";
import { isAuthorized } from "../middlewares/isAuth.js";
import { singleUpload } from "../middlewares/multer.js";
const router = express.Router();

router.post("/register", singleUpload, register);
router.post("/login", login);
router.post("/profile/update", isAuthorized, updateUserProfile);
router.get("/logout", isAuthorized, logout);
export default router;
