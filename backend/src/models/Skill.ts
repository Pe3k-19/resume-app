import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  name: String,
  value: Number,
});

export const Skill = mongoose.model("Skills", skillSchema);
