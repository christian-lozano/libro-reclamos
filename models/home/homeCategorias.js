import mongoose, { Schema, models } from "mongoose";

const sliderSchema = new Schema({
  
  public_id:String,
  secure_url:String,
  button_url:String,
  button_title:String
},{
  timestamps:true
})

const SliderTablet = models.home_categorias || mongoose.model("home_categorias", sliderSchema)
export default SliderTablet