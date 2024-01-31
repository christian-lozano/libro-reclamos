import algoliasearch from "algoliasearch";

export default async function handler(req, res) {
  const { method, body } = req

  switch (method) {
    case 'GET':
      try {
        console.log(body);
        res.end();
      } catch (error) {
        return res.status(500).json({ error: error.message })
      }

    case 'POST':

      
      try {
        const client = algoliasearch('235XIUIEK1','32f92a7d31a7320106285b5b7466e336')
      const index = client.initIndex('pwa_ecom_ui_template_products')
      index.getObject(body.objectID,{
        attributesToRetrieve: ['tallas',"units_in_stock"]
      }).then(object => {
        // console.log(body.units_in_stock);
        // console.log(object.units_in_stock);


       if (object.units_in_stock === body.units_in_stock) {
        let newArray = body.tallas.map(function(dato){
     
          if(dato.id == body.id){
            dato.stock = dato.stock - 1;
   
     
          }
          
          return dato;
        });
        // console.log(newArray);
        // console.log(body);

        let dataReturn = {
          tallas:newArray,
          stockProducto :body.units_in_stock - 1 
        }
        // console.log(dataReturn);
        // console.log(newArray);
        res.status(201).json({ msg:dataReturn})
          
      }else{
        console.log("las bases de datos cambiaron");
        return res.status(400).json({ msg: 'la base de datos variaron' })
      }
      



      });




        // let filtroTalla = object.tallas.find(el=> el.id === body.id  )
        // console.log(filtroTalla);
   

    
        // console.log(body)
    } catch (error) {
        return res.status(500).json({ error: error.message })
        
    }

    // default:
    //   return res.status(400).json({ msg: 'this method not difined' })
  }
}
