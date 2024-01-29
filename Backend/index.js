import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import { userRoutes } from "./src/routes/user.route.js";
import { authRoutes } from "./src/routes/auth.route.js";
dotenv.config();

const app = express();
app.use(cors())
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statuscode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
