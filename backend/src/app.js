import express from "express";
import cors from "cors";

import "./config/env.js";
import healthRoutes from "./routes/health.routes.js";
import emailRoutes from "./routes/email.routes.js";

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());

app.use("/api", healthRoutes);
app.use("/api", emailRoutes);

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Not found" });
});

export default app;
