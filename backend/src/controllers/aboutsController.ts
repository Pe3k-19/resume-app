import { Request, Response } from "express";
import { Abouts } from "../models/Abouts";

export const getAbouts = async (_req: Request, res: Response) => {
  try {
    const abouts = await Abouts.findOne();
    res.json(abouts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch abouts" });
  }
};
