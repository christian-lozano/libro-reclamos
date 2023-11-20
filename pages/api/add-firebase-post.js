import {db} from "@"

export default async function handler(req,res) {


   const postdb = db.collection("products")


   try {
    Promise.all(
            INICIAL_JSON.map(post=> postdb.add(post))
                ).then(()=>{
            res.status(202).json({
                message: "post subidos exitosamente"
            })
    })
   } catch (error) {
    res.status(500).json({
        message: "post no pudieron subirse"
    })
   }
  return (
    <div>add-firebase-post</div>
  )
}
