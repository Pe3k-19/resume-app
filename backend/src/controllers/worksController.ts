import { Works } from "../models/Works";

export const getWorks = async (req: any, res: any) => {
  const results = parseInt(req.query.results) || 10;
  const works = await Works.find().limit(results);
  res.json(works);
};
