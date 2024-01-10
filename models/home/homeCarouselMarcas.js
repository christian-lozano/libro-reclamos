import mongoose, { Schema, models } from "mongoose";

const sliderSchema = new Schema({
  
  public_id:String,
  secure_url:String,
  button_url:String
},{
  timestamps:true
})

const SliderTablet = models.slider_marcas || mongoose.model("slider_marcas", sliderSchema)
export default SliderTablet