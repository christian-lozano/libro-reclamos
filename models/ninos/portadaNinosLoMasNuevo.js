import mongoose, { Schema, models } from "mongoose";

const sliderMarcasSchema = new Schema({
  
  public_id:String,
  secure_url:String,
  button_url:String,
  button_title:String,



},{
  timestamps:true
})

const SliderMarcas = models.ninos_mas_nuevo || mongoose.model("ninos_mas_nuevo", sliderMarcasSchema)
export default SliderMarcas