import mongoose, { Schema, models } from "mongoose";

const sliderSchema = new Schema({
  
  public_id:String,
  secure_url:String
},{
  timestamps:true
})

const SliderTablet = models.slider_tablet || mongoose.model("slider_tablet", sliderSchema)
export default SliderTablet