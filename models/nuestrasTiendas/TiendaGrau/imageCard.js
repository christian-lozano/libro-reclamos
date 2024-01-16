import { Schema , model, models} from "mongoose"

const logoSchema = new Schema({
  
  public_id:String,
  secure_url:String
},{
  timestamps:true
})

const Logo = models.nuestrastiendas_img_tienda_grau || model("nuestrastiendas_img_tienda_grau", logoSchema)
export default Logo