import mongoose, { Schema, models } from "mongoose";

const sliderSchema = new Schema({
  
  public_id:String,
  secure_url:String
},{
  timestamps:true
})

const SliderMobil = models.slider_mobil || mongoose.model("slider_mobil", sliderSchema)
export default SliderMobil