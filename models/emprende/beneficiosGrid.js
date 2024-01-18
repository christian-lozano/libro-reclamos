import mongoose, { Schema, models } from "mongoose";

const sliderMarcasSchema = new Schema({
  
  public_id:String,
  secure_url:String,
  grid_title:String

},{
  timestamps:true
})

const SliderMarcas = models.emprende_beneficios || mongoose.model("emprende_beneficios", sliderMarcasSchema)
export default SliderMarcas