
import mongoose, { Schema, models } from "mongoose";

const portadaMujerMobilSchema = new Schema({
  

  public_id: {
    type: String,
    required: [true,"public_id titulo es necesario"],
    trim:true

  },

  secure_url: {
    type: String,
    required: [true,"secure_url titulo es necesario"],
    trim:true

  },
  
  button_title: {
    type: String,
    required: [true,"el titulo es necesario"],
    trim:true

  },
  button_url: {
    type: String,
    required: [true,"la url es necesaria"],
    trim:true

  }
},{
  timestamps:true
})

const PortadaMujerMobil = models.hombre_portada_mobil || mongoose.model("hombre_portada_mobil", portadaMujerMobilSchema)
export default PortadaMujerMobil


