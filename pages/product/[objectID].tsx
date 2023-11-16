import type { GetServerSidePropsContext } from 'next'
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
  return (
    <SearchPageLayout {...props}>
      <Container className="mt-12 xl:mt-20 overflow-x-hidden">
        <Configure filters={`objectID:${objectID?.toUpperCase()}`} />
        <Hits hitComponent={ProductDetailHit} />
      </Container>
      <Configure
        hitsPerPage={6}
        // We cannot retrieve the user token at build time, so we disable perso
        // feature to avoid an additional call to retrieve Algolia results at load time
        enablePersonalization={false}
        userToken={undefined}
      />

      <ProductsShowcase
        title="Recomendado Para ti"
        indexId="spring-summer-2021"
        ruleContexts={['home-spring-summer-2021']}
        className="laptop:bg-gray-50"
        hitComponent={ProductCardHitShowcase}
      />
    </SearchPageLayout>
  )
}

export const getServerSideProps = (context: GetServerSidePropsContext) =>
  getServerSidePropsPage(Product, context, {
    props: { objectID: context.params?.objectID },
  })
