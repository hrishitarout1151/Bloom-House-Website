import { Router } from "express";
import ContactMessage from "../models/ContactMessage.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: "Name, email, and message are required." });
    }
    const saved = await ContactMessage.create({ name, email, message });
    res.status(201).json({ id: saved._id });
  } catch (err) {
    console.error("POST /api/contact failed:", err.message);
    res.status(500).json({ message: "Could not send your message right now." });
  }
});

export default router;
