import { Schema , model, models} from "mongoose"

const logoSchema = new Schema({
  
  public_id:String,
  secure_url:String
},{
  timestamps:true
})

const Logo = models.emprende_img_mayorista || model("emprende_img_mayorista", logoSchema)
export default Logo