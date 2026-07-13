import { Skills } from "../models/Skills";

export const getSkills = async (req: any, res: any) => {
  try {
  const results = parseInt(req.query.results) || 10;
  const skills = await Skills.find().sort({ value: -1 }).limit(results);
  res.json(skills);
  }catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch skills" });
  }
};
