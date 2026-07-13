import { Informations } from "../models/Informations";

export const getInformations = async (req: any, res: any) => {
  try {
  const results = parseInt(req.query.results) || 10;
  const informations = await Informations.findOne().limit(results);
  res.json(informations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch informations" });
  }
};
