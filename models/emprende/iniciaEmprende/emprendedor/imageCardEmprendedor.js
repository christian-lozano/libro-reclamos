import { Schema , model, models} from "mongoose"

const logoSchema = new Schema({
  
  public_id:String,
  secure_url:String
},{
  timestamps:true
})

const Logo = models.emprende_img_emprendedor || model("emprende_img_emprendedor", logoSchema)
export default Logo