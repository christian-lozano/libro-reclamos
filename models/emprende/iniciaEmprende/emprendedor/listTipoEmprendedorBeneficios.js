import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    page: {
      type: String,
      required: [true,"tipo tipo es necesaria"],
      trim:true

    }
  },
  { timestamps: true }
);

const Nav = models.emprende_list_emprendedor_beneficios || mongoose.model("emprende_list_emprendedor_beneficios", userSchema);
export default Nav;
