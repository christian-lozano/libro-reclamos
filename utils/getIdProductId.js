import algoliasearch from "algoliasearch"

export default function getIdProductId({setPosts,objectID}) {
    const client = algoliasearch(
      'E142ZWDVM4',
      'cef8bca32bcdcb1a169b2ec00e1f8429'
    )
    const index = client.initIndex('pwa_ecom_ui_template_products')
    index
      .getObject(objectID, {
        attributesToRetrieve: ['gender', 'brand', 'product_type'],
      })
      .then((object) => {
        return setPosts(`${String(object.brand)} ${String(object.gender)}`)
      })
  }