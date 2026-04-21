import dotenv from "dotenv";
import { connectDB } from "./config/db";

dotenv.config();
connectDB();

import express from "express";
import cors from "cors";
import skillsRoutes from "./routes/skillsRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API beží 🚀 (TS verzia)");
});

app.use("/api", skillsRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
