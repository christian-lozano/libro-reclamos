import { Schema , model, models} from "mongoose"

const logoSchema = new Schema({
  
  public_id:String,
  secure_url:String
},{
  timestamps:true
})

const Logo = models.emprende_portada_mobil || model("emprende_portada_mobil", logoSchema)
export default Logo