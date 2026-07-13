import { Request, Response } from "express";
import { Informations } from "../models/Informations";

export const getInformations = async (_req: Request, res: Response) => {
  try {
  const informations = await Informations.findOne();
  res.json(informations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch informations" });
  }
};
