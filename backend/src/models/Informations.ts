import mongoose from "mongoose";

const informationsSchema = new mongoose.Schema({
  email: String,
  phone: String,
  address: String,
  city: String,
  name: String,
  postcode: String,
  surname: String,

  high_school: {
    name: { type: Map, of: String },
    from: Number,
    to: Number,
    profesion: { type: Map, of: String },
    address: String,
    city: String,
    postcode: String,
  },

  certificates: [
    {
      name: String,
      source: String,
      year: Number,
    },
  ],

  languages: [
    {
      name: { type: Map, of: String },
      value: Number,
    },
  ],
});

export const Informations = mongoose.model("Informations", informationsSchema);
