
import algoliasearch from 'algoliasearch/lite'

import { useCallback, useEffect, useState } from 'react'

import {
  Configure,

  InstantSearch,


} from 'react-instantsearch'
import {InfiniteHits} from "./Infinity-hits"




import { SearchBox } from '@/components/panel/SearchBox'

import { SearchPageLayout } from '@/layouts/search-page-layout'




const searchClient = algoliasearch(
  '235XIUIEK1',
  'c502207ec53e080f5223f93210e9f2be'
)


function Hit({ hit }) {
  return (
    <>
     <a href={`/product/${hit.objectID}?queryID=${hit.__queryID}`}>
     <div className='w-44'>
        <div >
            <img src={hit.image_urls[0]} alt="" />

        </div>
        <div>
          <span>
               {hit.name}
          </span>
        </div>
        <div>
            <span>
            {Number(hit.price.value)}
            </span>
        </div>

     </div>
     </a>
      {/* <ProductCard
        // currency={hit.price.currency.symbol}
        price={Number(hit.price.value)}
        // colors={hit.color.original_name}
        url={`/product/${hit.objectID}?queryID=${hit.__queryID}`}
        // titleHighlighting={hit.brand}
        label={hit.brand}
        title={hit.name}
        image={hit.image_urls[0]}
      /> */}
    </>
  )
}

export default function BuscadorHome({ ...props }) {
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
    <SearchPageLayout {...props}>
      {/* <HeaderNew activeSearchGlobal={false} props={props} /> */}

      <InstantSearch
        searchClient={searchClient}
        indexName="pwa_ecom_ui_template_products"
        routing={true}
        insights={true}
      >
        <Configure ruleContexts={[]} />

        <div className="Container mt-5 xl:mt-0">
          <div className="Search">
            <div className="  fixed w-full  z-[990] bg-white top-28">
                <div>
                  <SearchBox placeholder="Buscar" className='z-[999]' />

                </div>
                   <InfiniteHits hitComponent={Hit} />
            </div>

          </div>
        </div>
     
      </InstantSearch>
    </SearchPageLayout>
  )
}