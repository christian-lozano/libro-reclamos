import mongoose, { Schema, models } from "mongoose";

const sliderSchema = new Schema({
  
  public_id:String,
  secure_url:String
},{
  timestamps:true
})

const SliderTablet = models.nav || mongoose.model("nav", sliderSchema)
export default SliderTablet