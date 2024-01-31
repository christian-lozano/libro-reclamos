


import { ProductDetail } from './product-detail'




export function ProductDetailHit({ hit }) {


  // On sales
  if (hit.price.on_sales) {
    product.originalPrice = hit.price.value
    product.price = hit.price.discounted_value

    product.tags?.push({
      label: `on sale ${hit.price.discount_level}%`,
      theme: 'on-sale',
    } )
  }

  // Tags
  if (product.reviews && product.reviews >= 90) {
    product.popular = true
    product.tags?.push({
      label: 'popular',
      theme: 'popular',
    } )
  }

  // Sizes
  if (hit.available_sizes.length) {
    product.sizes?.push(
      ...hit.available_sizes.map((size) => ({ size, available: true }))
    )
  }

  // const router = useRouter()
  // const queryID = router?.query?.queryID as string

  // const handleCheckoutClick = useCallback(() => {
  //   searchInsights(
  //     queryID ? 'convertedObjectIDsAfterSearch' : 'convertedObjectIDs',
  //     {
  //       index: indexName,
  //       eventName: queryID
  //         ? 'PDP: Product Added to Cart'
  //         : 'PDP: Product Added to Cart',
  //       objectIDs: [hit.objectID],
  //       queryID,
  //     }
  //   )
  // }, [queryID, hit.objectID])

  return <ProductDetail {...product} />
}
