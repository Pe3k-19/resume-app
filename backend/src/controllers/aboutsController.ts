import { Abouts } from "../models/Abouts";

export const getAbouts = async (req: any, res: any) => {
  const results = parseInt(req.query.results) || 10;
  const abouts = await Abouts.findOne().limit(results);
  res.json(abouts);
};
