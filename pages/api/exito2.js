import algoliasearch from 'algoliasearch';

export default async function handler(req, res) {
    const { method, body } = req
    switch (method) {
        
        case 'GET':
            // console.log(req.query.collection_id);
            fetch(`https://api.mercadopago.com/v1/payments/${req.query.collection_id}`,{
                method:"GET",
                headers: {"Authorization":`Bearer ${process.env.ACCESS_TOKEN_MERCADO}`}
              })
              .then(res => res.json())
              .then(
                (result) => {



                    let productosCantidad =  result.additional_info.items.map(el=>{
                        let productos = {
                            units_in_stock: {
                                _operation: 'Decrement',
                                value: Number(el.quantity),
                              },

                            //   cuenta: {
                            //     _operation: 'Increment',
                            //     cuenta: Number(el.quantity),
                            //   },
                              objectID: el.id,
                    
                    
                        }
                    
                        return productos
                      })
                      console.log(productosCantidad);
           const client = algoliasearch(
                              `${process.env.CLI_APP_ID}`,
                              `${process.env.CLI_ADMIN_API_KEY}`
                            )
                          const index = client.initIndex(`${process.env.NEXT_PUBLIC_INSTANTSEARCH_INDEX_NAME}`)
                          index.partialUpdateObjects(productosCantidad)
                          .then(({ objectIDs }) => {
                            console.log(objectIDs);
                            res.redirect(`${process.env.URL_DOMINIO}/?clear=true`);
                          });
                  


                },

       
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                  // handle error
                }
              )
            
            // try {
            //     const res = await fetch(`https://api.mercadopago.com/v1/payments/${req.query.collection_id}`,{
            //         method:"GET",
            //         headers:{
            //             "Content-Type":"application/json",
            //             'Authorization':'APP_USR-1458144755191319-042511-bc0b96dc49d504d083e85727d5f8e50a-1360412804',
              
            //         }
            //      })
            //     const data = await res.json()
            //      console.log(data);
            // } catch (error) {
            //     console.log(error);
            // }
   

 
    

    
        default:
          // return res.status(201).json({ msg: 'this method not difined' })
      }
    }