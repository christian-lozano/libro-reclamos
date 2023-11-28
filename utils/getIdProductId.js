import algoliasearch from "algoliasearch"

export default function getIdProductId({setPosts,objectID}) {

  const client = algoliasearch(
    `${process.env.CLI_APP_ID}`,
    `${process.env.CLI_ADMIN_API_KEY}`
  )
  const index = client.initIndex(
    `${process.env.NEXT_PUBLIC_INSTANTSEARCH_INDEX_NAME}`
  )
    
    index
      .getObject(objectID, {
        attributesToRetrieve: ['gender', 'brand', 'product_type'],
      })
      .then((object) => {
        return setPosts(`${String(object.brand)} ${String(object.gender)}`)
      })
  }