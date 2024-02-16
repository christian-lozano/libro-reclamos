import { renderToString } from 'react-dom/server';
import algoliasearch from 'algoliasearch/lite';
import {
    InfiniteHits,
  InstantSearch,
  InstantSearchSSRProvider,
  getServerState,
} from 'react-instantsearch';
import { history } from 'instantsearch.js/es/lib/routers/index.js';
import singletonRouter from 'next/router';
import { createInstantSearchRouterNext } from 'react-instantsearch-router-nextjs';
import { ProductCard } from '@/components/product-card/product-card'

import { HeaderNew } from '@/components/header/header-new'

import Productos from "@/components/productos-tienda/Productos"
const searchClient = algoliasearch('235XIUIEK1', 'c502207ec53e080f5223f93210e9f2be');
function Hit({ hit }) {
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
export default function Home({ serverState, serverUrl ,  homeNav, homeLogo,}) {
    const propiedad = {
        homeNav,
        homeLogo
    }
  return (
    <InstantSearchSSRProvider {...serverState}>
          <HeaderNew activeSearchGlobal={false} props={propiedad} />
      <InstantSearch
        searchClient={searchClient}
        indexName="pwa_ecom_ui_template_products"

        insights={true}
        routing={{
          router: createInstantSearchRouterNext({ singletonRouter, serverUrl }),
        }}
      >
        <Productos/>
      </InstantSearch>
    </InstantSearchSSRProvider>
  );
}

export async function getServerSideProps({ req }) {
    const resNav = await fetch('https://www.fritzsport.pe/api/home/nav')
    const resLogo = await fetch('https://www.fritzsport.pe/api/home/logo')
    
  const homeNav = await resNav.json()
  const homeLogo = await resLogo.json()
  const protocol = req.headers.referer?.split('://')[0] || 'https';
  const serverUrl = `${protocol}://${req.headers.host}${req.url}`;
  const serverState = await getServerState(
    <Home serverUrl={serverUrl} />,
    { renderToString }
  );


  return {
    props: {
        homeNav,
        homeLogo,
      serverState,
      serverUrl,
    },
  };
}