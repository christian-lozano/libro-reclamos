import mongoose, { Schema, models } from "mongoose";

const sliderSchema = new Schema({
  
  public_id:String,
  secure_url:String,
  button_url:String,
  button_title:String
},{
  timestamps:true
})

const SliderTablet = models.banner_promo_home || mongoose.model("banner_promo_home", sliderSchema)
export default SliderTablet