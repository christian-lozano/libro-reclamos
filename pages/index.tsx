import { useEffect } from 'react'
import { useCart } from 'react-use-cart'

import PaginaHome from '@/components/pagina/paginaHome'
import type { SearchPageLayoutProps } from '@/layouts/search-page-layout'
import { SearchPageLayout } from '@/layouts/search-page-layout'

export default function Home(props: SearchPageLayoutProps) {
  const { emptyCart } = useCart()

  useEffect(() => {
    if (window.location.href === `${process.env.URL_DOMINIO}/?clear=true`) {
      emptyCart()
    }
  })

  return (
    <SearchPageLayout {...props}>
      <PaginaHome props={props} />
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
