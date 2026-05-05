import mongoose from "mongoose";

const skillsSchema = new mongoose.Schema({
  name: String,
  value: Number,
});

export const Skills = mongoose.model("Skills", skillsSchema);
