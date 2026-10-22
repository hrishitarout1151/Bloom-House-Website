import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";

import contactRoutes from "./routes/contact.js";
import preorderRoutes from "./routes/preorder.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/bloom-house";
const ALLOWED_ORIGIN = process.env.CLIENT_ORIGIN || "*";

app.use(cors({ origin: ALLOWED_ORIGIN }));
app.use(express.json({ limit: "20kb" }));

// Basic abuse protection on the public form endpoints.
const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use("/api/contact", formLimiter);
app.use("/api/preorder", formLimiter);

app.get("/health", (req, res) => res.json({ status: "ok" }));

app.use("/api/contact", contactRoutes);
app.use("/api/preorder", preorderRoutes);

app.use((req, res) => res.status(404).json({ message: "Not found." }));

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Bloom House API running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  });
