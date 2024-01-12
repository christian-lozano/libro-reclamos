import mongoose, { Schema, models } from "mongoose";

const sliderMarcasSchema = new Schema({
  
  public_id:String,
  secure_url:String,
  button_url:String,
  button_title:String,



},{
  timestamps:true
})

const SliderMarcas = models.hombre_destacado || mongoose.model("hombre_destacado", sliderMarcasSchema)
export default SliderMarcas