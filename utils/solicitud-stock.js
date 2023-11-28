import algoliasearch from "algoliasearch"


export function solicitudAlgoliaStock(itemsStock,setExecuting,removeItem) {


  const results = []
  const client = algoliasearch(
    `${process.env.CLI_APP_ID}`,
    `${process.env.CLI_ADMIN_API_KEY}`
  )
  const index = client.initIndex(
    `${process.env.NEXT_PUBLIC_INSTANTSEARCH_INDEX_NAME}`
  )
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
              // console.log(miCarritoSinDuplicados[i].quantity ,results[indice].units_in_stock)
       
              if (miCarritoSinDuplicados[i].quantity === results[indice].units_in_stock) {
                return setExecuting(true)
              } else if (miCarritoSinDuplicados[i].quantity > results[indice].units_in_stock){
                // console.log(miCarritoSinDuplicados[i].id);
                removeItem(miCarritoSinDuplicados[i].objectID)
              }else {
                // console.log(miCarritoSinDuplicados[indice].id, 'repetido')
    
                return setExecuting(false)
              }
              

            }
          }
        })



      }
}