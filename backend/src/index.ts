import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import routes from "./routes/routes";
import { connectDB } from "./config/db";

const startServer = async () => {
  dotenv.config();
  await connectDB();

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use("/api", routes);

  // Global error handler
  app.use(
    (
      err: Error,
      _req: express.Request,
      res: express.Response,
      _next: express.NextFunction,
    ) => {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    },
  );
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
  });
};

startServer().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});
