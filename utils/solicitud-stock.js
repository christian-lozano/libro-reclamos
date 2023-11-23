import algoliasearch from "algoliasearch"

export function solicitudAlgoliaStock(itemsStock,setExecuting,objectID) {
    const client = algoliasearch(
        'E142ZWDVM4',
        'cef8bca32bcdcb1a169b2ec00e1f8429'
      )
      const index = client.initIndex('pwa_ecom_ui_template_products')
      if (itemsStock) {
        index
          .getObject(String(objectID), {
            attributesToRetrieve: ['units_in_stock'],
          })
          .then((object) => {
            if (object.units_in_stock === itemsStock.quantity) {
             return setExecuting(true)
            } else {
                return setExecuting(false)
            }
          })
      }
}