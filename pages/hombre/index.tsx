import { Configure } from 'react-instantsearch-dom'

import { CarouselMarcasHome } from '@/components/carousel/carousel-marcas-home'
import PaginaHombre from '@/components/pagina/paginaHombre'
import type { SearchPageLayoutProps } from '@/layouts/search-page-layout'
import {
  SearchPageLayout,
  getStaticPropsPage,
} from '@/layouts/search-page-layout'

export default function Home(props: SearchPageLayoutProps) {
  return (
    <SearchPageLayout {...props}>
      <Configure
        hitsPerPage={6}
        // We cannot retrieve the user token at build time, so we disable persona
        // feature to avoid an additional call to retrieve Algolia results at load time
        enablePersonalization={false}
        userToken={undefined}
      />

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
      <PaginaHombre props={props} />

      <CarouselMarcasHome props={props} />
    </SearchPageLayout>
  )
}
export const getStaticProps = async () => {
  const resPortadaDesktop = await fetch(
    'https://www.fritzsport.pe/api/hombre/hombrePortadaDesktop'
  )

  const resPortadaMobil = await fetch(
    'https://www.fritzsport.pe/api/hombre/hombrePortadaMobil'
  )
  const resLoMasNuevo = await fetch(
    'https://www.fritzsport.pe/api/hombre/hombreLoMasNuevo'
  )
  const resDestacado = await fetch(
    'https://www.fritzsport.pe/api/hombre/hombreEstilosDestacados'
  )
  const resSliderMarcas = await fetch(
    'https://www.fritzsport.pe/api/home/homeSliderMarcas'
  )
  const resNav = await fetch('https://www.fritzsport.pe/api/home/nav')
  const resLogo = await fetch('https://www.fritzsport.pe/api/home/logo')
  const homeNav = await resNav.json()
  const homeLogo = await resLogo.json()
  const HombrePortadaDesktop = await resPortadaDesktop.json()
  const HombrePortadaMobil = await resPortadaMobil.json()
  const HombreLoMasNuevo = await resLoMasNuevo.json()
  const HombreDestacado = await resDestacado.json()
  const homeSliderMarcas = await resSliderMarcas.json()

  getStaticPropsPage(Home)
  return {
    props: {
      homeNav,
      homeLogo,
      HombrePortadaDesktop,
      HombrePortadaMobil,
      HombreLoMasNuevo,
      HombreDestacado,
      homeSliderMarcas,
    },
    // MujerPortadaDesktop,
    revalidate: 80, // In seconds
  }
}
