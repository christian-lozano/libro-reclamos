import algoliasearch from 'algoliasearch';

import Pagos from '../../models/pagosPendiente/pagoPendiente'
import mongoose from 'mongoose';
export default async function handler(req, res) {
    const { method } = req
    switch (method) {
        
        case 'GET':

  
            fetch(`https://api.mercadopago.com/v1/payments/${req.query.collection_id}`,{
                method:"GET",
                headers: {"Authorization":`Bearer ${process.env.ACCESS_TOKEN_MERCADO}`}
              })
              .then(res => res.json())
              .then(
                (result) => {


                  const client = algoliasearch('235XIUIEK1','32f92a7d31a7320106285b5b7466e336')
                  const index = client.initIndex('pwa_ecom_ui_template_products')

                                // let tallas = [
                                //     { id: "1122212", talla: "2", stock: 8 },
                                //     { id: "21212123", talla: "5", stock: 5 },
                                //     { id: "623123523", talla: "4", stock: 4 },
                                //     { id: "62374353", talla: "6", stock: 2 }
                                //   ]

                                // let arry =  [ 
                                //    { id: "1122212", talla: "4", stock: 8 },
                                //    { id: "21212123", talla: "4", stock: 5 },
                                  
                                //   ]




                                  // arry.map(elemet => {
                                  //   tallas.map(dato=> {
                               
                                  //       if(dato.id == elemet.id){
                                  //         dato.stock = dato.stock - elemet.stock;
                                  //       }
                                        
                                  //       return dato;
                                
                                  //   })

                                  // })
                                  // console.log(tallas);
                // result.additional_info.items.map((el,i)=>{

                //   })

              let resultadoObjectId =   result.additional_info.items.map(el=>{

                          
                                    let productos = 
                                     
                                              {
                                       
                                                objectId: el.id
                                              }
                                           
                                       
                                          
                                    

                                    return productos

                })

                let resultadoTallas =   result.additional_info.items.map(el=>{

                          
                            let productos = 
                             
                                      {
                                        
                                        id: el.description,
                                        talla:el.category_id,
                                        stock:Number(el.quantity),
                                        objectId: el.id
                                      }
                                   
                               
                                  
                            

                            return productos

                 })



   


            // console.log(resultadoTallas);



                          let set  = new Set( resultadoObjectId.map( JSON.stringify ) )
                          let arrSinDuplicaciones = Array.from( set ).map( JSON.parse );
                          


                          let arr = []
                          arrSinDuplicaciones.map(el=>{
                            arr.push(el.objectId)
                          })
                          // console.log(arr);
         
                          index.getObjects(arr, {
                            attributesToRetrieve: ['tallas','objectID']
                          }).then(({ results }) => {
                       


                            let dataEnviar = []

                            results.map(el=>{
                              dataEnviar.push(el)
                            })
  
  
                                  dataEnviar.map(el=>{
                                    resultadoTallas.map(reducir=>{
                                        el.tallas.map(elm=>{
                                          if(elm.id == reducir.id){
                                            elm.stock = elm.stock - reducir.stock ;
                                          }
                                          return elm;
                                        })

                                    })
                                  })


               
                                
                              dataEnviar.map(el=>{
                                    index.partialUpdateObject({
                                      tallas: el.tallas,
                                      objectID: el.objectID
                                    }).then(({ objectID }) => {
                                      console.log(objectID);
                                    });
                              })
              
                      
                          });









    
                      /*---------------------------------*/
                      /*    reduce stock*/
                      /*---------------------------------*/
                      
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
                


                    
                          index.partialUpdateObjects(productosCantidad)
                          .then(async   ({ objectIDs }) => {
                       
                            const filter = { id_payer:req.query.preference_id };
                            const update = { pedido_pagado:true, id_mercado_pago:req.query.collection_id };
                            let PedidoUpdate = await Pagos.findOneAndUpdate(filter,update)

                            console.log(PedidoUpdate);
                   
                            

                            //   console.log(result.collector_id);

            
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
   

          break;
            case 'POST':


                
              break;
    
        default:
          // return res.status(201).json({ msg: 'this method not difined' })
      }
    }




    // "tallas": [
    //   { "id": "asdasdsa", "talla": "2", "stock": 8 },
    //   { "id": "asdasdsa", "talla": "5", "stock": 5 },
    //   { "id": "asdasdsa", "talla": "4", "stock": 4 },
    //   { "id": "asdasdsa", "talla": "6", "stock": 2 }
    // ]



    // tallas: [
    //   { id: 'asda12s3ds1a', talla: '2', stock: 8 },
    //   { id: 'asd5as123dsa', talla: '5', stock: 0 },
    //   { id: 'asdart213sdsa', talla: '4', stock: 4 },
    //   { id: 'asda123sdsa', talla: '6', stock: 2 }
    // ],