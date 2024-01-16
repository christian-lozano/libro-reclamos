import { Schema , model, models} from "mongoose"

const logoSchema = new Schema({
  
  public_id:String,
  secure_url:String
},{
  timestamps:true
})

const Logo = models.emprende_portada_desktop || model("emprende_portada_desktop", logoSchema)
export default Logo