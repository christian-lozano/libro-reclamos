import React, { useCallback, useEffect, useState } from 'react'
import algoliasearch from 'algoliasearch';
import { useCart } from 'react-use-cart';
     
let objetos=[];

const testFunction =   ({items}) => {
  const client = algoliasearch('GXNXE1S5A4','890e7784e4e4e090caf2b3c4eab906c6')
  const index = client.initIndex('pwa_ecom_ui_template_products')
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

 
   
items.map( ( el ) => {

    let indexProduct = el.id.substring(0,6);
    let stock = el.units_in_stock - el.quantity;
    objetos.push({objectID:indexProduct,units_in_stock:stock})
  })    

  index.partialUpdateObjects([objetos[0]]).then(({ objectIDs }) => {
    console.log(objectIDs);
    console.log(objectIDs,"test");
  }).catch((error)=>{
      console.log(error.message);
  })


}
// let data = []
// const reducirStock = (indexProduct,stockActual,UnidadesComprado)=>{
//   const stock = Number(stockActual)
//   const UnidadesComp = Number(UnidadesComprado)
//   const indice = String(indexProduct)

//   index.partialUpdateObject({
//     units_in_stock: stock - UnidadesComp,  
//       objectID: indice,
//     })
//     .then(({ objectIDs }) => {
//       console.log(objectIDs);
//       console.log("exito");
//     }).catch((err) => {
//       console.log("ocurrio un error", err.message);
//       console.error(err);
//     });
// }


export default  function ReduceStock() {
  const {

    items,

  } = useCart()


  testFunction({items})



 




//     if (indiceProducto) {
//         var $_GET = {};
//         if(document.location.toString().indexOf('?') !== -1) {
//             var query = document.location
//                            .toString()
//                            // get the query string
//                            .replace(/^.*?\?/, '')
//                            // and remove any existing hash string (thanks, @vrijdenker)
//                            .replace(/#.*$/, '')
//                            .split('&');
        
//             for(var i=0, l=query.length; i<l; i++) {
//                var aux = decodeURIComponent(query[i]).split('=');
//                $_GET[aux[0]] = aux[1];
//             }
//         }
//         //get the 'index' query parameter
//         let  data = $_GET['variable1'];
//         // console.log(data);
//         // var input = data.trim();

//         // input=input.replaceAll(",", "\',\'");
//         // var output = input.slice(0, -1);
//         // // var a = `\'${output}\'`;
//         let arr = data.split(','); 
//         console.log(arr)


// // let arr = []
// // arr.push(data)
// //         console.log(arr);
//     }
 
    let myCar = new Object();
    // items.map( el=>{
      
    //   // let UnidadesCompradas = el.substring(0,1);
    //   // console.log(UnidadesCompradas);
    //    let indexProduct = el.id.substring(0,6);
    //   // console.log(indexProduct);

    //   //  let stockActual = el.slice(-1);
    //   // console.log(stockActual);
    //     console.log(typeof indexProduct);
    //     console.log(typeof el.units_in_stock);
    //     console.log(typeof el.quantity);

    //   // stock = Number(stockActual)
    //   // UnidadesComp = Number(UnidadesCompradas)
    //   // indiceProducto = String(indexProduct)
    //   //  console.log(typeof indiceProducto, indiceProducto);

 
    //     //  console.log(typeof indiceProducto, indiceProducto);
    //     //  console.log(indiceProducto,"test");
    //     //  console.log(stock,"stock");

    //     // index.partialUpdateObject({
    //     //   units_in_stock: 8 - 1,  
    //     //     objectID: "IB7432",
    //     //   })
    //     //   .then(({ objectIDs }) => {
    //     //     console.log(objectIDs);
    //     //     console.log("exito");
    //     //   }).catch((err) => {
    //     //     console.log("ocurrio un error", err.message);
    //     //     console.error(err);
    //     //   });

    
    //   })
      
 
      
      

    
    
   

  //     index.partialUpdateObjects(objects).then(({ objectIDs }) => {
  //    console.log(objectIDs);
  //  });
  





 



    


  return (
    <div>
    testFunction
    {/* <TestFunction></TestFunction> */}
    
    </div>
  )
}
