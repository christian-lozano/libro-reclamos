import React from 'react'

import { Loader } from '../loader/loader'
import { ProductDetail } from '../product-detail/product-detail'
import Head from 'next/head'

export default function ProductVista({product}) {

console.log(product.data.gender);
  return (
  <>
     <Head>


        	<meta property="og:locale" content="es_ES" />
	<meta property="og:type" content="product" />
	<meta property="og:title"  content={`${product.data.name} - FRITZ SPORT`} />
	<meta property="og:url" content={`https://www.fritzsport.pe/product/${product.data.sku}?queryID=${product.queryID}`} />
	<meta property="og:site_name" content="FRITZ SPORT" />
	<meta property="article:modified_time" content="2023-08-01T20:58:34+00:00" />
	<meta property="og:image" content={product.data.image_urls[0]}/>
	<meta property="og:image:width" content="1000" />
	<meta property="og:image:height" content="1000" />
	<meta property="og:image:type" content="image/png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:label1" content="Availability" />
	<meta name="twitter:data1" content="In stock" />

	<meta property="og:availability" content="instock" />
	<meta property="product:availability" content="instock" />
	<meta property="product:retailer_item_id" content={product.sku} />
	<meta property="product:condition" content="new" />
      </Head>
<div>
      {product.data ? (
            <ProductDetail
              descuento={product.data.price.discount_level}
              gender={product.data.gender}
              brand={product.data.brand}
              product_type={product.data.product_type}
              queryID={product.queryID}
              price={product.data.price.value}
              units_in_stock={product.data.units_in_stock}
              description={product.data.description}
              sizes={product.data.tallas}
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
