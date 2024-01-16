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

const Nav = models.nuestrastiendas_ubicacion_tienda_tumbes || mongoose.model("nuestrastiendas_ubicacion_tienda_tumbes", userSchema);
export default Nav;
