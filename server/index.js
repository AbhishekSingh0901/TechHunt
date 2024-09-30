import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./utils/db.js";
import userRoutes from "./routes/user.routes.js";
import companyRoutes from "./routes/company.routes.js";
dotenv.config();

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

//api routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/company", companyRoutes);
app.listen(process.env.PORT, () => {
  connectDB();
  console.log("server listening on port " + process.env.PORT);
});
