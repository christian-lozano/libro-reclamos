import React from 'react'

import { Loader } from '../loader/loader'
import { ProductDetail } from '../product-detail/product-detail'

export default function ProductVista({product}) {
  return (
  <>
<div>
      {product ? (
            <ProductDetail
              price={product.price.value}
              units_in_stock={product.units_in_stock}
              description={product.description}
              sizes={product.available_sizes}
              objectID={product.objectID}
              image={product.image_urls}
              title={product.name}
            />
          ) : (
            <Loader />
          )}

</div>
  </>
  )
}
