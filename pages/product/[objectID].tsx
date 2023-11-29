import algoliasearch from 'algoliasearch'
import type { GetServerSidePropsContext } from 'next'
import { useEffect, useState } from 'react'
import { Hits, Configure } from 'react-instantsearch-dom'

import { Container } from '@/components/container/container'
import { ProductCardHitShowcase } from '@/components/product-card/product-card-hit'
import { ProductDetailHit } from '@/components/product-detail/product-detail-hit'
import { ProductsShowcase } from '@/components/products-showcase/products-showcase'
import type { SearchPageLayoutProps } from '@/layouts/search-page-layout'
import {
  getServerSidePropsPage,
  SearchPageLayout,
} from '@/layouts/search-page-layout'

export type ProductPageProps = SearchPageLayoutProps & {
  objectID: string
}

export default function Product({ objectID, ...props }: ProductPageProps) {
  const [posts, setPosts] = useState(Object)

  function fetchPosts() {
    const client = algoliasearch(
      '235XIUIEK1',
      '32f92a7d31a7320106285b5b7466e336'
    )
    const index = client.initIndex('pwa_ecom_ui_template_products')
    index
      .getObject(objectID, {
        attributesToRetrieve: ['gender', 'brand', 'product_type'],
      })
      .then((object) => {
        return setPosts(Object(object))
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  useEffect(() => {
    fetchPosts()
  }, [objectID])

  return (
    <>
      <SearchPageLayout {...props}>
        <Container className="mt-11 xl:mt-20 overflow-x-hidden overflow-y-hidden">
          <Configure filters={`objectID:${objectID?.toUpperCase()}`} />
          <Hits hitComponent={ProductDetailHit} />
          {/* <ProductsShowcase
            title="Recomendado Para ti"
            indexId="spring-summer-2021"
            ruleContexts={['home-spring-summer-2021']}
            className="laptop:bg-gray-50"
            hitComponent={ProductCardHitShowcase}
          />   */}
        </Container>
      </SearchPageLayout>
      <SearchPageLayout {...props}>
        <div>
          <ProductsShowcase
            indexId="recommended"
            title="Recomendado para ti"
            query={`${posts.brand} ${posts.gender} ${posts.product_type}`}
            ruleContexts={`${posts.brand} ${posts.gender} ${posts.product_type}`}
            hitComponent={ProductCardHitShowcase}
          />
        </div>
      </SearchPageLayout>
    </>
  )
}

export const getServerSideProps = (context: GetServerSidePropsContext) =>
  getServerSidePropsPage(Product, context, {
    props: {
      objectID: context.params?.objectID,
    },
  })
