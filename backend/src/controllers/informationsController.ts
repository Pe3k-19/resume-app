import { Informations } from "../models/Informations";

export const getInformations = async (req: any, res: any) => {
  const results = parseInt(req.query.results) || 10;
  const informations = await Informations.findOne().limit(results);
  res.json(informations);
};
