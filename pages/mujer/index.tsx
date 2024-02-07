import { Configure } from 'react-instantsearch-dom'

import { CarouselMarcasHome } from '@/components/carousel/carousel-marcas-home'
import { HeaderNew } from '@/components/header/header-new'
import PaginaMujer from '@/components/pagina/paginaMujer'
import type { SearchPageLayoutProps } from '@/layouts/search-page-layout'
import {
  SearchPageLayout,
  getStaticPropsPage,
} from '@/layouts/search-page-layout'

export default function Home(props: SearchPageLayoutProps) {
  return (
    <SearchPageLayout {...props}>
      <HeaderNew activeSearchGlobal={false} props={props} />
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
      <PaginaMujer props={props} />

      <CarouselMarcasHome props={props} />
    </SearchPageLayout>
  )
}
export const getStaticProps = async () => {
  const resPortadaDesktop = await fetch(
    'https://www.fritzsport.pe/api/mujer/mujerPortadaDesktop'
  )

  const resPortadaMobil = await fetch(
    'https://www.fritzsport.pe/api/mujer/MujerPortadaMobil'
  )
  const resLoMasNuevo = await fetch(
    'https://www.fritzsport.pe/api/mujer/mujerLoMasNuevo'
  )
  const resDestacado = await fetch(
    'https://www.fritzsport.pe/api/mujer/mujerEstilosDestacados'
  )
  const resSliderMarcas = await fetch(
    'https://www.fritzsport.pe/api/home/homeSliderMarcas'
  )

  const MujerPortadaDesktop = await resPortadaDesktop.json()
  const MujerPortadaMobil = await resPortadaMobil.json()
  const MujerLoMasNuevo = await resLoMasNuevo.json()
  const MujerDestacado = await resDestacado.json()
  const homeSliderMarcas = await resSliderMarcas.json()

  const resNav = await fetch('https://www.fritzsport.pe/api/home/nav')
  const resLogo = await fetch('https://www.fritzsport.pe/api/home/logo')
  const homeNav = await resNav.json()
  const homeLogo = await resLogo.json()

  getStaticPropsPage(Home)
  return {
    props: {
      homeNav,
      homeLogo,
      MujerPortadaDesktop,
      MujerPortadaMobil,
      MujerLoMasNuevo,
      MujerDestacado,
      homeSliderMarcas,
    },
    // MujerPortadaDesktop,
    revalidate: 80, // In seconds
  }
}
