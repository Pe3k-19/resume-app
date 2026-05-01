import mongoose from "mongoose";

const aboutsSchema = new mongoose.Schema({
  name: String,
  surname: String,
  position: String,
  about_text_1: { type: Map, of: String },
  about_text_2: { type: Map, of: String },
});

export const Abouts = mongoose.model("Abouts", aboutsSchema);
