import algoliasearch from "algoliasearch"


export function solicitudAlgoliaStock(itemsStock,setExecuting,removeItem,objectID,setTalla,setActiveSize) {

  setTalla(null)
  setActiveSize(null)
  const results = []
  const client = algoliasearch(
    `${process.env.CLI_APP_ID}`,
    `${process.env.CLI_ADMIN_API_KEY}`
  )
const index = client.initIndex(`${process.env.NEXT_PUBLIC_INSTANTSEARCH_INDEX_NAME}`)
  
      const miCarritoSinDuplicados = itemsStock.reduce((acumulador, valorActual) => {
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
      if (itemsStock) {
        miCarritoSinDuplicados.map((el) => results.push(el.objectID))
        index
        .getObjects(results, {
          attributesToRetrieve: ['units_in_stock'],
        })
        .then(({ results }) => {

          for (let indice = 0; indice < results.length; indice++) {
            for (let i = 0; i < miCarritoSinDuplicados.length; i++) {
              // console.log(miCarritoSinDuplicados);
              console.log(miCarritoSinDuplicados[i].quantity ,results[indice].units_in_stock)
   
              
              if (miCarritoSinDuplicados[i].quantity === results[indice].units_in_stock ) {
                //  setExecuting(true)
                
                if (miCarritoSinDuplicados[i].objectID === objectID) {
                  return setExecuting(true)
                }
               
              } if (miCarritoSinDuplicados[i].quantity > results[indice].units_in_stock){
                console.log("se cumple");
                // console.log(miCarritoSinDuplicados[i].id);
                  removeItem(miCarritoSinDuplicados[i].id)

                // console.log("entro");
                // for (let indice = 0;  results[indice].units_in_stock < miCarritoSinDuplicados[i].quantity; indice++) {
                //     console.log(results[indice].units_in_stock < miCarritoSinDuplicados[i].quantity);
                //   removeItem(miCarritoSinDuplicados[i].id)
                // }
            
              
              }
              

            }
          }
        }).catch((error)=> {
          console.log(error.message);
        })



      }
}