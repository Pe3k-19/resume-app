import express from "express";
import { getWorks } from "../controllers/worksController";
import { getAbouts } from "../controllers/aboutsController";
import { getSkills } from "../controllers/skillsController";
import { getInformations } from "../controllers/informationsController";

const router = express.Router();

router.get("/me", getInformations);
router.get("/abouts", getAbouts);
router.get("/works", getWorks);
router.get("/skills", getSkills);

export default router;
