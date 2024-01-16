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

const Nav = models.nuestrastiendas_horarios_tienda_grau || mongoose.model("nuestrastiendas_horarios_tienda_grau", userSchema);
export default Nav;
