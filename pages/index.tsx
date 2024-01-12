import { useEffect } from 'react'
import { Configure } from 'react-instantsearch-dom'
import { useCart } from 'react-use-cart'

import { BannerPromociones } from '@/components/body-home/banner-promociones'
import { CategoriasGenero } from '@/components/body-home/categorias-genero'
import CarouselHome from '@/components/carousel/carousel-home'
import { CarouselMarcasHome } from '@/components/carousel/carousel-marcas-home'
import { ProductCardHitShowcase } from '@/components/product-card/product-card-hit'
import { ProductsShowcase } from '@/components/products-showcase/products-showcase'
import type { SearchPageLayoutProps } from '@/layouts/search-page-layout'
import { SearchPageLayout } from '@/layouts/search-page-layout'

export default function Home(props: SearchPageLayoutProps) {
  const { emptyCart } = useCart()

  useEffect(() => {
    if (window.location.href === 'https://fritz-sport.vercel.app/?clear=true') {
      emptyCart()
    }
  })

  return (
    <SearchPageLayout {...props}>
      <Configure
        hitsPerPage={6}
        // We cannot retrieve the user token at build time, so we disable perso
        // feature to avoid an additional call to retrieve Algolia results at load time
        enablePersonalization={false}
        userToken={undefined}
      />
      {/* 
monto card add mb 
boton close mas grande
slider desaparece porque voy a carrito

*/}
      {/* <Banner
        size="xl"
        title="New<br />Collection"
        subtitle="Spring/summer 2021"
        image={BannerImage}
        imageAlt="New Collection - Spring/Summer 2021"
        fullWidth={true}
        overlay={true}
        classNameTitle="text-3xl font-normal tracking-wider leading-tight laptop:text-7xl"
      /> */}
      <CarouselHome props={props} />
      <CategoriasGenero props={props} />
      <ProductsShowcase
        title="Lo mas Nuevo"
        indexId="spring-summer-2021"
        ruleContexts={['home-spring-summer-2021']}
        className="laptop:bg-gray-50"
        hitComponent={ProductCardHitShowcase}
      />

      <BannerPromociones props={props} />
      <ProductsShowcase
        title="Primavera / Verano 2023"
        indexId="spring-summer-2021"
        ruleContexts={['home-spring-summer-2021']}
        className="laptop:bg-gray-50"
        hitComponent={ProductCardHitShowcase}
      />
      {/* <ProductsShowcase
        title="Lo Nuevo en Zapatillas"
        indexId="Men"
        query="nike"
        hitComponent={ProductCardHitShowcase}
      /> */}
      <CarouselMarcasHome props={props} />
    </SearchPageLayout>
  )
}

export const getStaticProps = async () => {
  const resSliderDesktop = await fetch(
    'https://www.fritzsport.pe/api/home/sliderDesktop'
  )

  const resSliderTablet = await fetch(
    'https://www.fritzsport.pe/api/home/sliderTablet'
  )
  const resSliderMobil = await fetch(
    'https://www.fritzsport.pe/api/home/sliderMobil'
  )
  const resNav = await fetch('https://www.fritzsport.pe/api/home/nav')
  const resLogo = await fetch('https://www.fritzsport.pe/api/home/logo')
  const resCategorias = await fetch(
    'https://www.fritzsport.pe/api/home/homeCategorias'
  )
  const resPromoDesktop = await fetch(
    'https://www.fritzsport.pe/api/home/homePromoDesktop'
  )
  const resPromoMobil = await fetch(
    'https://www.fritzsport.pe/api/home/homePromoMobil'
  )

  const resSliderMarcas = await fetch(
    'https://www.fritzsport.pe/api/home/homeSliderMarcas'
  )
  const homeSliderDesktop = await resSliderDesktop.json()
  const homeSliderTablet = await resSliderTablet.json()
  const homeSliderMobil = await resSliderMobil.json()

  const homeNav = await resNav.json()
  const homeLogo = await resLogo.json()
  const homeCategorias = await resCategorias.json()

  const homePromoDesktop = await resPromoDesktop.json()
  const homePromoMobil = await resPromoMobil.json()

  const homeSliderMarcas = await resSliderMarcas.json()

  return {
    props: {
      homeSliderDesktop,
      homeSliderTablet,
      homeSliderMobil,
      homeNav,
      homeLogo,
      homeCategorias,
      homePromoDesktop,
      homePromoMobil,
      homeSliderMarcas,
    },
    revalidate: 80, // In seconds
  }
}

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const resSliderDesktop = await fetch(
//     'https://www.fritzsport.pe/api/home/sliderDesktop'
//   )

//   const resSliderTablet = await fetch(
//     'https://www.fritzsport.pe/api/home/sliderTablet'
//   )
//   const resSliderMobil = await fetch(
//     'https://www.fritzsport.pe/api/home/sliderMobil'
//   )
//   const resNav = await fetch('https://www.fritzsport.pe/api/home/nav')
//   const resLogo = await fetch('https://www.fritzsport.pe/api/home/logo')
//   const resCategorias = await fetch(
//     'https://www.fritzsport.pe/api/home/homeCategorias'
//   )
//   const resPromoDesktop = await fetch(
//     'https://www.fritzsport.pe/api/home/homePromoDesktop'
//   )
//   const resPromoMobil = await fetch(
//     'https://www.fritzsport.pe/api/home/homePromoMobil'
//   )

//   const resSliderMarcas = await fetch(
//     'https://www.fritzsport.pe/api/home/homeSliderMarcas'
//   )
//   const homeSliderDesktop = await resSliderDesktop.json()
//   const homeSliderTablet = await resSliderTablet.json()
//   const homeSliderMobil = await resSliderMobil.json()

//   const homeNav = await resNav.json()
//   const homeLogo = await resLogo.json()
//   const homeCategorias = await resCategorias.json()

//   const homePromoDesktop = await resPromoDesktop.json()
//   const homePromoMobil = await resPromoMobil.json()

//   const homeSliderMarcas = await resSliderMarcas.json()

//   getServerSidePropsPage(Home, context)
//   return {
//     // props: { objectID: context.params?.objectID },
//     props: {
//       homeSliderDesktop,

//       homeSliderTablet,
//       homeSliderMobil,
//       homeNav,
//       homeLogo,
//       homeCategorias,
//       homePromoDesktop,
//       homePromoMobil,
//       homeSliderMarcas,
//     },
//     // revalidate: 60, // In seconds
//   }
// }
