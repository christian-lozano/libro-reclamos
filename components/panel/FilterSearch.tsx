import algoliasearch from 'algoliasearch/lite'
import { history } from 'instantsearch.js/es/lib/routers/index'
// import { history } from 'instantsearchjs/es/lib/routers/index.js'
import {
  InstantSearch,
  RefinementList,
  InstantSearchSSRProvider,
  DynamicWidgets,
} from 'react-instantsearch'
import { Panel } from 'react-instantsearch-dom'
import type { InstantSearchServerState } from 'react-instantsearch-hooks'

import { SearchBox } from '@/components/panel/SearchBox'

const client = algoliasearch(
  `${process.env.CLI_APP_ID}`,
  `${process.env.CLI_ADMIN_API_KEY}`
)

export default function FilterSeach({
  serverState,
  url,
}: {
  serverState?: InstantSearchServerState
  url?: string
}) {
  // useEffect(() => {
  //   document.querySelector('.ais-Panel:nth-child(1)').innerHTML = 'Genero'
  //   document.querySelector('.ais-Panel[2] ').innerHTML = 'Genero'
  // }, [])

  return (
    <InstantSearchSSRProvider {...serverState}>
      <InstantSearch
        searchClient={client}
        indexName={`${process.env.NEXT_PUBLIC_INSTANTSEARCH_INDEX_NAME}`}
        routing={{
          router: history({
            getLocation() {
              if (typeof window === 'undefined') {
                return new URL(url!) as unknown as Location
              }

              return window.location
            },
          }),
        }}
        //         searchClient={client}
        //         indexName="pwa_ecom_ui_template_products"
        //         routing={false}
        insights={true}
      >
        <div>
          <SearchBox />
        </div>
        <div className="flex w-full ">
          <div className="static">
            <div className=" p-5 sticky top-0 pt-16">
              <DynamicWidgets fallbackComponent={FallbackComponent} />
            </div>
          </div>
        </div>
      </InstantSearch>
    </InstantSearchSSRProvider>
  )
}
function FallbackComponent({ attribute }: { attribute: string }) {
  return (
    <Panel header={attribute}>
      <RefinementList attribute={attribute} />
    </Panel>
  )
}

// 2

// import algoliasearch from 'algoliasearch/lite'
// import type { Hit as AlgoliaHit } from 'instantsearch.js'
// import type { GetServerSideProps } from 'next'
// import { useRouter } from 'next/router'
// import React, { useState } from 'react'
// import { renderToString } from 'react-dom/server'
// import type { InstantSearchServerState } from 'react-instantsearch'
// import {
//   DynamicWidgets,
//   InstantSearch,
//   Hits,
//   RefinementList,
//   InstantSearchSSRProvider,
//   getServerState,
//   Configure,
// } from 'react-instantsearch'

// import { SearchBox } from '@/components/panel/SearchBox'
// import { Panel } from '@/components/panel/panel'
// import { ProductCard } from '@/components/product-card/product-card'

// const client = algoliasearch('235XIUIEK1', 'c502207ec53e080f5223f93210e9f2be')

// type HitProps = {
//   hit: AlgoliaHit<{
//     name: string
//     price: number
//   }>
// }

// function Hit({ hit }: HitProps) {
//   return (
//     <>
//       {/* <Highlight hit={hit} attribute="name" className="Hit-label" /> */}
//       <ProductCard
//         // title={hit.name}
//         currency={hit.currency}
//         price={Number(hit.price.value)}
//         // colors={hit.color.original_name}
//         url={`/product/${hit.objectID}?queryID=${hit.__queryID}`}
//         // titleHighlighting={hit.brand}
//         label={hit.brand}
//         title={hit.name}
//         image={hit.image_urls[0]}
//       />
//     </>
//   )
// }

// type HomePageProps = {
//   serverState?: InstantSearchServerState
//   url?: string
// }

// export default function HomePage({ serverState, url }: HomePageProps) {
//   const router = useRouter()
//   const [agreement, setAgreement] = useState(false)
//   // if (agreement) {
//   //   router.push(
//   //     '/catalog?pwa_ecom_ui_template_products%5BrefinementList%5D%5Bavailable_sizes%5D%5B0%5D=34'
//   //   )
//   // }
//   const [configureValues, setConfigureValue] = useState({
//     hitsPerPage: 3,
//     analyticsTags: ['queryType: browse-land'],
//   })
//   const onAlgoliaUiStateChange = ({ uiState, setUiState }: any) => {
//     setConfigureValue({
//       hitsPerPage: 6,
//       analyticsTags: ['queryType: browse-filter'],
//     })
//     setUiState(uiState)
//   }
//   return (
//     <InstantSearchSSRProvider {...serverState}>
//       <InstantSearch
//         searchClient={client}
//         indexName="pwa_ecom_ui_template_products"
//         routing={false}
//         insights={true}
//         onStateChange={onAlgoliaUiStateChange}
//       >
//         <Configure
//           hitsPerPage={configureValues.hitsPerPage}
//           analyticsTags={configureValues.analyticsTags}
//         />
//         <div>
//           <SearchBox />
//         </div>
//         <div className="flex gap-x-10">
//           <div>
//             <DynamicWidgets fallbackComponent={FallbackComponent} />
//           </div>
//           <Hits hitComponent={Hit} />
//         </div>
//       </InstantSearch>
//     </InstantSearchSSRProvider>
//   )
// }

// function FallbackComponent({ attribute }: { attribute: string }) {
//   return (
//     <Panel header={attribute}>
//       <RefinementList attribute={attribute} />
//     </Panel>
//   )
// }

// export const getServerSideProps: GetServerSideProps<HomePageProps> =
//   async function getServerSideProps({ req }) {
//     const protocol = req.headers.referer?.split('://')[0] || 'https'
//     const url = `${protocol}://${req.headers.host}${req.url}`
//     const serverState = await getServerState(<HomePage url={url} />, {
//       renderToString,
//     })

//     return {
//       props: {
//         serverState,
//         url,
//       },
//     }
//   }

// 3

// import algoliasearch from 'algoliasearch/lite'
// import type { Hit as AlgoliaHit } from 'instantsearch.js'
// import type { GetServerSideProps } from 'next'
// import Link from 'next/link'
// import React, { useState } from 'react'
// import { renderToString } from 'react-dom/server'
// import { getServerState } from 'react-instantsearch-hooks-server'
// import type { InstantSearchServerState } from 'react-instantsearch-hooks-web'
// import {
//   DynamicWidgets,
//   InstantSearch,
//   Hits,
//   Highlight,
//   RefinementList,
//   SearchBox,
//   InstantSearchSSRProvider,
// } from 'react-instantsearch-hooks-web'

// import { Panel } from '@/components/panel/panel'

// const client = algoliasearch('235XIUIEK1', 'c502207ec53e080f5223f93210e9f2be')

// type HitProps = {
//   hit: AlgoliaHit<{
//     name: string
//     price: number
//   }>
// }

// function Hit({ hit }: HitProps) {
//   console.log(hit)
//   return (
//     <>
//       <Link passHref={true} href="/other-page" className="Hit-label">
//         <a>
//           <Highlight hit={hit} attribute="name" />
//         </a>
//       </Link>
//       <span className="Hit-price">${hit.name}</span>
//     </>
//   )
// }

// type HomePageProps = {
//   serverState?: InstantSearchServerState
//   url?: string
// }

// export default function HomePage({ serverState, url }: HomePageProps) {
//   const [configureValues, setConfigureValue] = useState({
//     hitsPerPage: 3,
//     analyticsTags: ['queryType: browse-land'],
//   })

//   const onAlgoliaUiStateChange = ({ uiState, setUiState }: any) => {
//     setConfigureValue({
//       hitsPerPage: 6,
//       analyticsTags: ['queryType: browse-filter'],
//     })
//     setUiState(uiState)
//   }

//   return (
//     // <InstantSearchSSRProvider {...serverState}>
//     //   <InstantSearch
//     //     searchClient={client}
//     //     indexName="pwa_ecom_ui_template_products"
//     //     routing={false}
//     //     insights={true}
//     //     onStateChange={onAlgoliaUiStateChange}
//     //   >
//     //     <div className="Container">
//     //       <Configure
//     //         hitsPerPage={configureValues.hitsPerPage}
//     //         analyticsTags={configureValues.analyticsTags}
//     //       />
//     //       <div>
//     //         <DynamicWidgets fallbackComponent={FallbackComponent} facets={[]} />
//     //       </div>
//     //       <div>
//     //         <SearchBox />
//     //         <Hits hitComponent={Hit} />
//     //         <InfiniteHits hitComponent={Hit} />
//     //       </div>
//     //     </div>
//     //   </InstantSearch>
//     // </InstantSearchSSRProvider>
//     //
//     <InstantSearchSSRProvider {...serverState}>
//       <InstantSearch
//         searchClient={client}
//         indexName="pwa_ecom_ui_template_products"
//         routing={false}
//         insights={true}
//         onStateChange={onAlgoliaUiStateChange}
//       >
//         <div>
//           <SearchBox />
//         </div>
//         <div className="flex">
//           <div>
//             <DynamicWidgets fallbackComponent={FallbackComponent} />
//           </div>
//           <Hits hitComponent={Hit} />
//         </div>
//       </InstantSearch>
//     </InstantSearchSSRProvider>
//   )
// }

// function FallbackComponent({ attribute }: { attribute: string }) {
//   return (
//     <Panel header={attribute}>
//       <RefinementList attribute={attribute} />
//     </Panel>
//   )
// }

// export const getServerSideProps: GetServerSideProps<HomePageProps> =
//   async function getServerSideProps({ req }) {
//     const protocol = req.headers.referer?.split('://')[0] || 'https'
//     const url = `${protocol}://${req.headers.host}${req.url}`
//     const serverState = await getServerState(<HomePage url={url} />, {
//       renderToString,
//     })

//     return {
//       props: {
//         serverState,
//         url,
//       },
//     }
//   }
