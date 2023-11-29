import algoliasearch from "algoliasearch"

export default function getIdProductId({setPosts,objectID}) {

  const client = algoliasearch('235XIUIEK1','32f92a7d31a7320106285b5b7466e336')
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