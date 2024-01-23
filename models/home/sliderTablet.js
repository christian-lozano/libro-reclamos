import mongoose, { Schema, models } from "mongoose";

const sliderSchema = new Schema({
  
  public_id:String,
  secure_url:String,
  button_url:String,
},{
  timestamps:true
})

const SliderTablet = models.home_slider_tablet || mongoose.model("home_slider_tablet", sliderSchema)
export default SliderTablet