import algoliasearch from "algoliasearch"

export default function getIdProductId({setPosts,objectID}) {

  const client = algoliasearch('GXNXE1S5A4','890e7784e4e4e090caf2b3c4eab906c6')
  const index = client.initIndex('pwa_ecom_ui_template_products')
    
    index
      .getObject(objectID, {
        attributesToRetrieve: ['gender', 'brand', 'product_type'],
      })
      .then((object) => {
        return setPosts(`${String(object.brand)} ${String(object.gender)}`)
      }).catch((error)=>{
        console.log(error.message);
      })
  }