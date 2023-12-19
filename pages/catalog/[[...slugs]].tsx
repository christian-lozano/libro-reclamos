// import type { Hit as AlgoliaHit } from '@algolia/client-search'
// import algoliasearch from 'algoliasearch/lite'
// import { history } from 'instantsearch.js/es/lib/routers/index'
// import { useState, useCallback, useEffect } from 'react'
// // import { history } from 'instantsearchjs/es/lib/routers/index.js'
// import {
//   InstantSearch,
//   RefinementList,
//   InstantSearchSSRProvider,
//   DynamicWidgets,
// } from 'react-instantsearch'
// import { Panel } from 'react-instantsearch-dom'
// import type { InstantSearchServerState } from 'react-instantsearch-hooks'

// import { Button } from '@/components/@ui/button/button'
// import { Hits } from '@/components/panel/Hits'
// import { SearchBox } from '@/components/panel/SearchBox'
// import { ProductCard } from '@/components/product-card/product-card'

// const client = algoliasearch('235XIUIEK1', '32f92a7d31a7320106285b5b7466e336')

// type HitProps = {
//   hit: AlgoliaHit<{
//     name: string
//     __queryID: string
//     brand: string
//     image_urls: string[]
//     price: AlgoliaHit<{
//       value: string
//     }>
//   }>
// }

// function Hit({ hit }: HitProps) {
//   return (
//     <>
//       {/* <Highlight hit={hit} attribute="name" className="Hit-label" /> */}
//       <ProductCard
//         // currency={hit.price.currency.symbol}
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

// export default function Home({
//   serverState,
//   url,
// }: {
//   serverState?: InstantSearchServerState
//   url?: string
// }) {
//   // useEffect(() => {
//   //   document.querySelector('.ais-Panel:nth-child(1)').innerHTML = 'Genero'
//   //   document.querySelector('.ais-Panel[2] ').innerHTML = 'Genero'
//   // }, [])
//   const [first, setfirst] = useState(false)
//   const [altoScroll, setAltoScroll] = useState(0)

//   const handleNavigation = useCallback(
//     () => setAltoScroll(window.scrollY),
//     [altoScroll]
//   )
//   useEffect(() => {
//     window.addEventListener('scroll', handleNavigation)

//     return () => {
//       window.removeEventListener('scroll', handleNavigation)
//     }
//   }, [handleNavigation])
//   return (
//     <InstantSearchSSRProvider {...serverState}>
//       <InstantSearch
//         searchClient={client}
//         indexName="pwa_ecom_ui_template_products"
//         routing={{
//           router: history({
//             getLocation() {
//               if (typeof window === 'undefined') {
//                 return new URL(url!) as unknown as Location
//               }

//               return window.location
//             },
//           }),
//         }}
//         //         searchClient={client}
//         //         indexName="pwa_ecom_ui_template_products"
//         //         routing={false}
//         insights={true}
//       >
//         <SearchBox />

//         <div className="flex w-full  ">
//           <div
//             className={`xl:p-5 px-3 xl:sticky xl:overflow-y-hidden xl:max-w-[16vw] ${
//               first
//                 ? 'transition translate-x-[0rem]  xl:translate-x-0 ease-linear delay-150'
//                 : 'transition translate-x-[20rem] xl:translate-x-0  ease-linear delay-150'
//             }  xl:block  overflow-y-scroll  h-full fixed bg-white  w-3/5 right-0  z-overlay-full xl:z-[0] top-0 xl:pt-16`}
//           >
//             <div className="sticky top-0 flex flex-col justify-center items-center h-20 w-full  bg-white">
//               <h3 className="text-center mb-3 xl:hidden block ">Filtros</h3>
//               <Button
//                 className="absolute top-3 left-5 flex xl:hidden"
//                 onClick={() => setfirst(false)}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="w-5 h-5"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </Button>
//             </div>
//             <div className=" px-5 ">
//               <DynamicWidgets fallbackComponent={FallbackComponent} />
//             </div>
//           </div>

//           <Button
//             className={`fixed flex justify-end items-center  right-0 xl:hidden z-[10] pr-6  w-3/3 border-b-[1px] border-[#eeeeee] ${
//               altoScroll > 10 ? 'top-[9rem]' : 'top-[11rem]'
//             }   bg-white w-full `}
//             onClick={() => setfirst(true)}
//           >
//             <div className=" flex items-center justify-center py-[0.70rem]">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
//                 />
//               </svg>
//             </div>
//           </Button>

//           <div className="overflow-x-hidden relative  flex flex-col  ">
//             <div className="mt-[10vh]">
//               <Hits hitComponent={Hit} />
//             </div>
//           </div>
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

/* ---------------------------------*/
/* 22222222222222222222222222222222222222222222*/
/* --------------------------------------------------------------------------------*/

import algoliasearch from 'algoliasearch/lite'
import type { Hit as AlgoliaHit } from 'instantsearch.js'
import { useCallback, useEffect, useState } from 'react'
import {
  Configure,
  DynamicWidgets,
  RangeInput,
  RefinementList,
  ToggleRefinement,
  InstantSearch,
  InfiniteHits,
  CurrentRefinements,
} from 'react-instantsearch'

import { Button } from '@/components/@ui/button/button'
import { SearchBox } from '@/components/panel/SearchBox'
import { Panel } from '@/components/panel2/Panel'
import { QueryRuleCustomData } from '@/components/panel2/QueryRuleCustomData'
import { ProductCard } from '@/components/product-card/product-card'

const searchClient = algoliasearch(
  '235XIUIEK1',
  'c502207ec53e080f5223f93210e9f2be'
)

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

export default function Home() {
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
    <InstantSearch
      searchClient={searchClient}
      indexName="pwa_ecom_ui_template_products"
      routing={true}
      insights={true}
    >
      <Configure ruleContexts={[]} />

      <div className="Container">
        <div className="Search">
          <SearchBox placeholder="Buscar" />
          <div className="Search-header">
            {/* <PoweredBy /> */}
            {/* <HitsPerPage
              items={[
                { label: '20 hits per page', value: 20, default: true },
                { label: '40 hits per page', value: 40 },
              ]}
            /> */}
            {/* <SortBy
              items={[
                { label: 'Relevance', value: 'instant_search' },
                { label: 'Price (asc)', value: 'price.value' },
                { label: 'Price (desc)', value: 'instant_search_price_desc' },
              ]}
            /> */}
            {/* <Refresh /> */}
          </div>

          <QueryRuleCustomData>
            {({ items }) => (
              <>
                {items.map((item) => (
                  <a href={item.link} key={item.banner}>
                    <img src={item.banner} alt={item.title} />
                  </a>
                ))}
              </>
            )}
          </QueryRuleCustomData>
        </div>
      </div>
      <div className="xl:flex  xl:w-full ">
        <div className="">
          <div
            className={`xl:p-5 px-3 xl:sticky xl:top-0 xl:overflow-y-hidden  xl:overflow-x-hidden xl:max-w-[20vw] w-[52vw] ${
              first
                ? 'transition translate-x-[0rem]  xl:translate-x-0 ease-linear delay-150'
                : 'transition translate-x-[20rem] xl:translate-x-0  ease-linear delay-150'
            }  xl:block  overflow-y-scroll  fixed bg-white  w-3/5 right-0  z-overlay-full xl:z-[0] top-0 `}
          >
            <div className="sticky top-0 flex flex-col justify-center items-center h-20 w-[42vw]  bg-white">
              <h3 className="text-center mb-3 xl:hidden block ">Filtros</h3>
              <Button
                className="absolute top-3 left-5 flex xl:hidden"
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
            </div>
            <div className=" px-5 w-[100%]  xl:w-auto  overflow-y-scroll h-[90vh] xl:h-auto  xl:overflow-y-hidden ">
              <DynamicWidgets>
                <Panel header="Categoría">
                  <RefinementList
                    attribute="Categoria"
                    searchable={true}
                    searchablePlaceholder="Buscar Categoría"
                    showMore={true}
                  />
                </Panel>
                <Panel header="Genero">
                  <RefinementList
                    attribute="Genero"
                    searchable={true}
                    searchablePlaceholder="Buscar Genero"
                    showMore={true}
                  />
                </Panel>
                <Panel header="Tallas">
                  <RefinementList
                    attribute="Tallas"
                    searchable={true}
                    searchablePlaceholder="Buscar Tallas"
                    showMore={true}
                  />
                </Panel>
                <Panel header="Color">
                  <RefinementList
                    attribute="Color"
                    searchable={true}
                    searchablePlaceholder="Buscar Color"
                    showMore={true}
                  />
                </Panel>
                {/* <Panel header="Genero">
              <Menu attribute="Genero" showMore={true} />
            </Panel> */}
                {/* <Panel header="Genero">
              <HierarchicalMenu
                attributes={['Hombre', 'Mujer', 'lvl2']}
                showMore={true}
              />
            </Panel> */}
                <Panel header="Precio">
                  <RangeInput attribute="price.value" precision={1} />
                </Panel>
                <Panel header="Free Shipping">
                  <ToggleRefinement
                    attribute="free_shipping"
                    label="Free shipping"
                  />
                </Panel>
              </DynamicWidgets>
            </div>
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
            <div className="CurrentRefinements grid gap-5 grid-cols-5">
              {/* <ClearRefinements /> */}
              <CurrentRefinements
                transformItems={(items) =>
                  items.map((item) => {
                    const label = item.label.startsWith(
                      'hierarchicalCategories'
                    )
                      ? 'Hierarchy'
                      : item.label

                    return {
                      ...item,
                      attribute: label,
                    }
                  })
                }
              />
            </div>
            <InfiniteHits showPrevious={false} hitComponent={Hit} />
          </div>
        </div>
      </div>
    </InstantSearch>
  )
}
