import { Request, Response } from "express";
import { Skills } from "../models/Skills";

export const getSkills = async (req: Request, res: Response) => {
  try {
  const results = parseInt(req.query.results as string) || 10;
  const skills = await Skills.find().sort({ value: -1 }).limit(results);
  res.json(skills);
  }catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch skills" });
  }
};
