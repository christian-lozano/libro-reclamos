import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    page: {
      type: String,
      required: [true,"la url es necesaria"],
      trim:true

    },
    url: {
      type: String,
      required: [true,"la url es necesaria"],
      trim:true
    }
  },
  { timestamps: true }
);

const Nav = models.emprende_pasos_list || mongoose.model("emprende_pasos_list", userSchema);
export default Nav;
