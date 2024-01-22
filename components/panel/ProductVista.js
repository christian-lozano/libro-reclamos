import React from 'react'

import { Loader } from '../loader/loader'
import { ProductDetail } from '../product-detail/product-detail'
import Head from 'next/head'

export default function ProductVista({product}) {

    
  
  return (
  <>
     <Head>
        <title>{product.data.name}</title>
        <meta name="description" content="Checkout our cool page" key="desc" />
        <meta property="og:title" content={product.data.name} />
        <meta
          property="og:description"
          content={product.data.name}
        />
        <meta
          property="og:image"
          content={product.data.image_urls[0]}
        />
      </Head>
<div>
      {product.data ? (
            <ProductDetail
              price={product.data.price.value}
              units_in_stock={product.data.units_in_stock}
              description={product.data.description}
              sizes={product.data.available_sizes}
              objectID={product.data.objectID}
              image={product.data.image_urls}
              title={product.data.name}
            />
          ) : (
            <Loader />
          )}

</div>
  </>
  )
}
