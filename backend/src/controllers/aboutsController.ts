import { Abouts } from "../models/Abouts";

export const getAbouts = async (req: any, res: any) => {
  try {
  const results = parseInt(req.query.results) || 10;
    const abouts = await Abouts.findOne().limit(results);
    res.json(abouts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch abouts" });
  }
};
