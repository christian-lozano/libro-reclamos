import type { Hit as AlgoliaHit } from '@algolia/client-search'
import algoliasearch from 'algoliasearch/lite'
import { history } from 'instantsearch.js/es/lib/routers/index'
import { useState, useCallback, useEffect } from 'react'
// import { history } from 'instantsearchjs/es/lib/routers/index.js'
import {
  InstantSearch,
  RefinementList,
  InstantSearchSSRProvider,
  DynamicWidgets,
} from 'react-instantsearch'
import { Panel } from 'react-instantsearch-dom'
import type { InstantSearchServerState } from 'react-instantsearch-hooks'

import { Button } from '@/components/@ui/button/button'
import { Hits } from '@/components/panel/Hits'
import { SearchBox } from '@/components/panel/SearchBox'
import { ProductCard } from '@/components/product-card/product-card'

const client = algoliasearch('235XIUIEK1', 'c502207ec53e080f5223f93210e9f2be')

type HitProps = {
  hit: AlgoliaHit<{
    name: string
    __queryID: string
    brand: string
    image_urls: string[]
    price: AlgoliaHit<{
      value: string
    }>
  }>
}

function Hit({ hit }: HitProps) {
  return (
    <>
      {/* <Highlight hit={hit} attribute="name" className="Hit-label" /> */}
      <ProductCard
        // currency={hit.price.currency.symbol}
        price={Number(hit.price.value)}
        // colors={hit.color.original_name}
        url={`/product/${hit.objectID}?queryID=${hit.__queryID}`}
        // titleHighlighting={hit.brand}
        label={hit.brand}
        title={hit.name}
        image={hit.image_urls[0]}
      />
    </>
  )
}

export default function Home({
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
  const [first, setfirst] = useState(false)
  const [altoScroll, setAltoScroll] = useState(0)

  const handleNavigation = useCallback(
    () => setAltoScroll(window.scrollY),
    [altoScroll]
  )
  useEffect(() => {
    window.addEventListener('scroll', handleNavigation)

    return () => {
      window.removeEventListener('scroll', handleNavigation)
    }
  }, [handleNavigation])
  return (
    <InstantSearchSSRProvider {...serverState}>
      <InstantSearch
        searchClient={client}
        indexName="pwa_ecom_ui_template_products"
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
        <SearchBox />

        <div className="flex w-full  ">
          <div
            className={`p-5 xl:sticky xl:overflow-y-hidden max-w-[16vw] ${
              first ? 'block' : 'hidden'
            }  xl:block  overflow-y-scroll  h-full fixed bg-white  w-3/5 right-0  z-overlay-full top-0 xl:pt-16`}
          >
            <h3 className="text-center mb-3 xl:hidden block mt-10">Filtros</h3>
            <Button
              className="absolute top-5 left-5 flex xl:hidden"
              onClick={() => setfirst(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Button>
            <div className="mt-10">
              <DynamicWidgets fallbackComponent={FallbackComponent} />
            </div>
          </div>

          <Button
            className={`fixed flex justify-end items-center  right-0 xl:hidden z-[10] pr-6  w-3/3 border-b-[1px] border-[#eeeeee] ${
              altoScroll > 10 ? 'top-[9rem]' : 'top-[11rem]'
            }   bg-white w-full `}
            onClick={() => setfirst(true)}
          >
            <div className=" flex items-center justify-center py-[0.70rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>
            </div>
          </Button>

          <div className="overflow-x-hidden relative  flex flex-col  ">
            <div className="mt-[10vh]">
              <Hits hitComponent={Hit} />
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
