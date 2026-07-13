import { Request, Response } from "express";
import { Works } from "../models/Works";

export const getWorks = async (req: Request, res: Response) => {
  try {
  const results = parseInt(req.query.results as string) || 10;
    const works = await Works.find().sort({ to: -1 }).limit(results);
    res.json(works);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch works" });
  }
};
