import algoliasearch from "algoliasearch"

export default function getIdProductId({setPosts,objectID}) {

  const client = algoliasearch('235XIUIEK1','7309d3ebceea2513cf95956563059ac8')
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