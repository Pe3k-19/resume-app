import { Skills } from "../models/Skills";

export const getSkills = async (req: any, res: any) => {
  const results = parseInt(req.query.results) || 10;
  const skills = await Skills.find().sort({ value: -1 }).limit(results);

  res.json(skills);
};
