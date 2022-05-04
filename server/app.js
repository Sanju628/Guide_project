import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";

const app = express();

dotenv.config();

mongoose.connect(process.env.DB_CONNECT, () => {
  console.log("Connected to mongoDB");
});

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import routes from "./routes/routes.js";

app.use(routes);

export default app;
