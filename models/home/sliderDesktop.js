import mongoose, { Schema, models } from "mongoose";

const sliderSchema = new Schema({
  
  public_id:String,
  secure_url:String
},{
  timestamps:true
})

const SliderDesktop = models.slider_desktop || mongoose.model("slider_desktop", sliderSchema)
export default SliderDesktop