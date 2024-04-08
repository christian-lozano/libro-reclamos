import algoliasearch from 'algoliasearch'
import type { GetServerSidePropsContext } from 'next'

import { Container } from '@/components/container/container'
import { HeaderNew } from '@/components/header/header-new'
import ProductVista from '@/components/panel/ProductVista'
import { ProductCardHitShowcase } from '@/components/product-card/product-card-hit'
import { ProductsShowcase } from '@/components/products-showcase/products-showcase'
import type { SearchPageLayoutProps } from '@/layouts/search-page-layout'
import {
  SearchPageLayout,
  getServerSidePropsPage,
} from '@/layouts/search-page-layout'

export type ProductPageProps = SearchPageLayoutProps & {
  objectID: string
}

export default function Product({ objectID, ...props }: ProductPageProps) {
  // const router = useRouter()
  // const { objectID } = router.query
  // const [posts, setPosts] = useState(Object)
  console.log(objectID)

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

  return (
    <SearchPageLayout {...props}>
      <HeaderNew activeSearchGlobal={false} props={props} />

      {/* <h1>Cool Page</h1>
      <p>This is a cool page. It has lots of cool content!</p> */}
      <div>
        <Container className="mt-11 xl:mt-20 overflow-x-hidden overflow-y-hidden">
          {/* <div>{router.query.slug}</div> */}
          {/* <ProductDetailHit hit={product} /> */}
          <ProductVista product={props} />
        </Container>
      </div>
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
  )
}
// export const getServerSideProps = (context: GetServerSidePropsContext) =>
//   getServerSidePropsPage(Product, context, {
//     props: {
//       objectID: context.params?.objectID,
//     },
//   })

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const client = algoliasearch('235XIUIEK1', '32f92a7d31a7320106285b5b7466e336')
  const index = client.initIndex('pwa_ecom_ui_template_products')

  const data = await index
    .getObject(String(context.params?.objectID))
    .then((object) => {
      return object
    })

  // const getProduct = () => {

  //   const index = client.initIndex('pwa_ecom_ui_template_products')
  //   index.getObject(String(context.params?.objectID)).then((object) => {
  //     return object
  //   })
  // }
  // const resNav = await fetch('https://www.fritzsport.pe/api/home/nav')
  // const resLogo = await fetch('https://www.fritzsport.pe/api/home/logo')
  // const homeNav = await resNav.json()
  // const homeLogo = await resLogo.json()
  return getServerSidePropsPage(Product, context, {
    props: {
      objectID: context.params?.objectID,
      queryID: context.query?.queryID,
      // homeNav,
      // homeLogo,
      data,
    },
  })
}
