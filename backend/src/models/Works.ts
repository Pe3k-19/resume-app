import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: Map, of: String },
  link: { type: String },
  tech_stack: [{ type: String }],
});

const worksSchema = new mongoose.Schema({
  position: { type: String, required: true },
  company: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  projects: [projectSchema],
});

export const Works = mongoose.model("Works", worksSchema);
