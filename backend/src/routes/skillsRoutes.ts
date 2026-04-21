import express from "express";
import { getSkills } from "../controllers/skillsController";

const router = express.Router();

router.get("/skills", getSkills);
// router.post("/skills", createSkill);
// router.put("/skills/:id", updateSkill);
// router.delete("/skills/:id", deleteSkill);

export default router;
