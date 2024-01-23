import mongoose, { Schema, models } from "mongoose";

const sliderSchema = new Schema({
  
  public_id:String,
  secure_url:String,
  button_url:String,
},{
  timestamps:true
})

const SliderMobil = models.home_slider_mobil || mongoose.model("home_slider_mobil", sliderSchema)
export default SliderMobil