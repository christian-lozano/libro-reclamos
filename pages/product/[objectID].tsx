import algoliasearch from 'algoliasearch'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { Container } from '@/components/container/container'
import ProductVista from '@/components/panel/ProductVista'
import { ProductCardHitShowcase } from '@/components/product-card/product-card-hit'
import { ProductsShowcase } from '@/components/products-showcase/products-showcase'
import type { SearchPageLayoutProps } from '@/layouts/search-page-layout'
import { SearchPageLayout } from '@/layouts/search-page-layout'

export type ProductPageProps = SearchPageLayoutProps & {
  objectID: string
}

export default function Product() {
  const router = useRouter()
  const { objectID } = router.query
  // const [posts, setPosts] = useState(Object)
  const [product, setProduct] = useState(undefined)

  // function fetchPosts() {
  //   const client = algoliasearch(
  //     'GXNXE1S5A4',
  //     '890e7784e4e4e090caf2b3c4eab906c6'
  //   )
  //   const index = client.initIndex('pwa_ecom_ui_template_products')
  //   index
  //     .getObject(String(objectID), {
  //       attributesToRetrieve: ['gender', 'brand', 'product_type'],
  //     })
  //     .then((object) => {
  //       return setPosts(Object(object))
  //     })
  //     .catch((error) => {
  //       console.log(error.message)
  //     })
  // }

  function getProduct() {
    const client = algoliasearch(
      '235XIUIEK1',
      'c502207ec53e080f5223f93210e9f2be'
    )
    const index = client.initIndex('pwa_ecom_ui_template_products')
    index.getObject(String(objectID)).then((object) => {
      return setProduct(Object(object))
    })
  }

  useEffect(() => {
    // fetchPosts()
    getProduct()
  }, [objectID])

  return (
    <>
      <div>
        <Container className="mt-11 xl:mt-20 overflow-x-hidden overflow-y-hidden">
          {/* <div>{router.query.slug}</div> */}
          {/* <ProductDetailHit hit={product} /> */}
          <ProductVista product={product} />
        </Container>
      </div>
      <SearchPageLayout>
        <div>
          <ProductsShowcase
            indexId="recommended"
            title="Recomendado para ti"
            query={`adidas`}
            // ruleContexts={`${product.brand} ${product.gender} ${product.product_type}`}
            hitComponent={ProductCardHitShowcase}
          />
        </div>
      </SearchPageLayout>
    </>
  )
}

// export const getServerSideProps = (context: GetServerSidePropsContext) =>
//   getServerSidePropsPage(Product, context, {
//     props: {
//       objectID: context.params?.objectID,
//     },
//   })
