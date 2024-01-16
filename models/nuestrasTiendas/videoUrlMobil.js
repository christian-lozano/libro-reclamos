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

const Nav = models.nuestrastiendas_video_url_mobil || mongoose.model("nuestrastiendas_video_url_mobil", userSchema);
export default Nav;
