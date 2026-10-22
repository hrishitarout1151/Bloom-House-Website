import { Router } from "express";
import Preorder from "../models/Preorder.js";

const router = Router();

// Create a pickup pre-order
router.post("/", async (req, res) => {
  try {
    const { name, phone, time, items } = req.body;
    if (!name || !phone || !time || !items) {
      return res.status(400).json({ message: "Name, phone, time, and items are required." });
    }
    const saved = await Preorder.create({ name, phone, time, items });
    res.status(201).json({ id: saved._id });
  } catch (err) {
    console.error("POST /api/preorder failed:", err.message);
    res.status(500).json({ message: "Could not reserve your order right now." });
  }
});

// Simple listing endpoint for staff to check today's pre-orders.
// In production, protect this with an auth check before going live.
router.get("/", async (req, res) => {
  try {
    const preorders = await Preorder.find().sort({ createdAt: -1 }).limit(100);
    res.json(preorders);
  } catch (err) {
    console.error("GET /api/preorder failed:", err.message);
    res.status(500).json({ message: "Could not load pre-orders." });
  }
});

export default router;
