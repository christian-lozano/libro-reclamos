import React from 'react'
// import 'instantsearch.css/themes/algolia.css';
import { useCallback, useEffect, useState } from 'react'
import {
    Configure,
    DynamicWidgets,
    RangeInput,
    RefinementList,
    ToggleRefinement,


    CurrentRefinements,
  } from 'react-instantsearch'

  import { Button } from '@/components/@ui/button/button'

import { SearchBox } from '@/components/panel/SearchBox'
import { Panel } from '@/components/panel2/Panel'
import { QueryRuleCustomData } from '@/components/panel2/QueryRuleCustomData'
import { ProductCard } from '@/components/product-card/product-card'
import { InfiniteHits } from './Infinity-hits'

function Hit({ hit }) {
    console.log(hit.gender);
   
    return (
      <>
        {/* <Highlight hit={hit} attribute="name" className="Hit-label" /> */}
        <ProductCard
           gender={hit.gender}
          // currency={hit.price.currency.symbol}
          price={hit.precio}
          descuento={hit.price.discount_level}
          url={`/product/${hit.objectID}?queryID=${hit.__queryID}`}
          // titleHighlighting={hit.brand}
          label={hit.brand}
          title={hit.name}
          image={hit.image_urls[0]}
        />
      </>
    )
  }

export default function Productos() {
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
    <>
        <Configure ruleContexts={[]} />

            <div className="Container mt-5 xl:mt-0">
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
                className={`xl:p-5 px-3 xl:sticky xl:top-0 xl:overflow-y-hidden  xl:overflow-x-hidden xl:max-w-[20vw] w-[80vw] ${
                    first
                    ? 'transition translate-x-[0rem]  xl:translate-x-0 ease-linear delay-150'
                    : 'transition translate-x-[80vw] xl:translate-x-0  ease-linear delay-150'
                }  xl:block  overflow-y-scroll  fixed bg-white  w-3/5 right-0  z-overlay-full xl:z-[0] top-0 `}
                >
                <Button
                    className="absolute top-3 right-5 flex xl:hidden"
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
                <div className="sticky top-0 flex flex-col justify-center items-center h-20 w-[42vw]  bg-white">
                    <h3 className="text-center mb-3 xl:hidden block ">Filtros</h3>
                </div>
                <div className=" px-5 w-[100%]  xl:w-auto  overflow-y-scroll h-[87vh]   xl:overflow-y-scroll ">
                    <DynamicWidgets>
                    <Panel header="Categoría">
                        <RefinementList
                        attribute="Categoria"
                        searchable={false}
                        searchablePlaceholder="Buscar Categoría"
                        showMore={false}
                        limit={50}
                        />
                    </Panel>
                    <Panel header="Genero">
                        <RefinementList
                        attribute="Genero"
                        searchable={false}
                        searchablePlaceholder="Buscar Genero"
                        showMore={false}
                        />
                    </Panel>
                    <Panel header="Marca">
                        <RefinementList
                        attribute="brand"
                        searchable={false}
                        searchablePlaceholder="Buscar Marca"
                        showMore={false}
                        />
                        
                    </Panel>
                    <Panel header="Descuento">
                        <RefinementList
                        attribute="price.discount_level"
                        searchable={false}
                        searchablePlaceholder="Buscar Marca"
                        showMore={false}
                        />
                        
                    </Panel>
                    {/* <Panel header="Tallas">
                        <RefinementList
                        sortBy={['count:desc', 'name:asc']}
                        attribute="Tallas"
                        searchable={false}
                        searchablePlaceholder="Buscar Tallas"
                        showMore={false}
                        />
                    </Panel> */}
                    <Panel header="Color">
                        <RefinementList
                        attribute="Color"
                        searchable={false}
                        searchablePlaceholder="Buscar Color"
                        showMore={false}
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

    </>
  )
}
