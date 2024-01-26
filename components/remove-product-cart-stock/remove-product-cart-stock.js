import algoliasearch from 'algoliasearch'
import { useEffect, useState } from 'react'
import { useCart } from 'react-use-cart'

export default function RemoveProductCartStock() {
const {  items, emptyCart } = useCart()


function fetchPosts() {
  const results = []
  const client = algoliasearch(
    `${process.env.CLI_APP_ID}`,
    `${process.env.CLI_ADMIN_API_KEY}`
  )
const index = client.initIndex(`${process.env.NEXT_PUBLIC_INSTANTSEARCH_INDEX_NAME}`)
      const miCarritoSinDuplicados = items.reduce((acumulador, valorActual) => {
        const elementoYaExiste = acumulador.find(elemento => elemento.objectID === valorActual.objectID);
        if (elementoYaExiste) {
          return acumulador.map((elemento) => {
            if (elemento.objectID === valorActual.objectID) {
              return {
                ...elemento,
                quantity: elemento.quantity + valorActual.quantity
              }
            }

            return elemento;
          });
        }

        return [...acumulador, valorActual];
      }, []);
      if (items) {
        miCarritoSinDuplicados.map((el) => results.push(el.objectID))
        index
        .getObjects(results, {
          attributesToRetrieve: ['units_in_stock'],
        })
        .then(({ results }) => {

          for (let indice = 0; indice < results.length; indice++) {
            for (let i = 0; i < miCarritoSinDuplicados.length; i++) {
              // console.log( results[indice].units_in_stock, " |",miCarritoSinDuplicados[i].quantity);
             
                if (miCarritoSinDuplicados[i].quantity > results[indice].units_in_stock) {
                  console.log(miCarritoSinDuplicados[i].quantity ,"||",results[indice].units_in_stock);
                  emptyCart();
                  // removeItem(miCarritoSinDuplicados[inx].id);
                      //  removeItem(miCarritoSinDuplicados[i].objectID)
              }
         
                // console.log(miCarritoSinDuplicados[i].objectID)
            
            
            }
          }
        }).catch((error)=>{
          console.log(error.message);
        })



      }
}
useEffect(() => {
  fetchPosts()
}, [])




  return (
    <div></div>
  )
}
