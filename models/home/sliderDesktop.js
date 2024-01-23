import mongoose, { Schema, models } from "mongoose";

const sliderSchema = new Schema({
  
  public_id:String,
  secure_url:String,
  button_url:String,
},{
  timestamps:true
})

const SliderDesktop = models.home_slider_desktop || mongoose.model("home_slider_desktop", sliderSchema)
export default SliderDesktop