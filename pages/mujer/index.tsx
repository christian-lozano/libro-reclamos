import { Configure } from 'react-instantsearch-dom'

import { CarouselMarcasHome } from '@/components/carousel/carousel-marcas-home'
import PaginaMujer from '@/components/pagina/paginaMujer'
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

  const MujerPortadaDesktop = await resPortadaDesktop.json()
  const MujerPortadaMobil = await resPortadaMobil.json()

  getStaticPropsPage(Home)
  return {
    props: {
      MujerPortadaDesktop,
      MujerPortadaMobil,
    },
    // MujerPortadaDesktop,
    revalidate: 80, // In seconds
  }
}
