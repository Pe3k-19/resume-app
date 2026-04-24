import express from "express";
import { getSkills } from "../controllers/skillsController";
import { getInformations } from "../controllers/informationsController";

const router = express.Router();

router.get("/me", getInformations);
router.get("/skills", getSkills);
// router.post("/skills", createSkill);
// router.put("/skills/:id", updateSkill);
// router.delete("/skills/:id", deleteSkill);

export default router;
