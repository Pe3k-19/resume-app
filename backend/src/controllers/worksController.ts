import { Works } from "../models/Works";

export const getWorks = async (req: any, res: any) => {
  try {
  const results = parseInt(req.query.results) || 10;
    const works = await Works.find().sort({ to: -1 }).limit(results);
    res.json(works);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch works" });
  }
};
