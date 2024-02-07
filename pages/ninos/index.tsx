import { Configure } from 'react-instantsearch-dom'

import { CarouselMarcasHome } from '@/components/carousel/carousel-marcas-home'
import { HeaderNew } from '@/components/header/header-new'
import PaginaNinos from '@/components/pagina/paginaNinos'
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
      <PaginaNinos props={props} />

      <CarouselMarcasHome props={props} />
    </SearchPageLayout>
  )
}
export const getStaticProps = async () => {
  const resPortadaDesktop = await fetch(
    'https://www.fritzsport.pe/api/ninos/ninosPortadaDesktop'
  )

  const resPortadaMobil = await fetch(
    'https://www.fritzsport.pe/api/ninos/ninosPortadaMobil'
  )
  const resLoMasNuevo = await fetch(
    'https://www.fritzsport.pe/api/ninos/ninosLoMasNuevo'
  )
  const resDestacado = await fetch(
    'https://www.fritzsport.pe/api/ninos/ninosEstilosDestacados'
  )
  const resSliderMarcas = await fetch(
    'https://www.fritzsport.pe/api/home/homeSliderMarcas'
  )
  const resNav = await fetch('https://www.fritzsport.pe/api/home/nav')
  const resLogo = await fetch('https://www.fritzsport.pe/api/home/logo')
  const homeNav = await resNav.json()
  const homeLogo = await resLogo.json()

  const NinosPortadaDesktop = await resPortadaDesktop.json()
  const NinosPortadaMobil = await resPortadaMobil.json()
  const NinosLoMasNuevo = await resLoMasNuevo.json()
  const NinosDestacado = await resDestacado.json()
  const homeSliderMarcas = await resSliderMarcas.json()
  getStaticPropsPage(Home)
  return {
    props: {
      homeNav,
      homeLogo,
      NinosPortadaDesktop,
      NinosPortadaMobil,
      NinosLoMasNuevo,
      NinosDestacado,
      homeSliderMarcas,
    },
    // MujerPortadaDesktop,
    revalidate: 80, // In seconds
  }
}
