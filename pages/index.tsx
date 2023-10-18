import { Configure } from 'react-instantsearch-dom'

import { BannerPromociones } from '@/components/body-home/banner-promociones'
import { CategoriasGenero } from '@/components/body-home/categorias-genero'
import CarouselHome from '@/components/carousel/carousel-home'
import { CarouselMarcasHome } from '@/components/carousel/carousel-marcas-home'
import { ProductCardHitShowcase } from '@/components/product-card/product-card-hit'
import { ProductsShowcase } from '@/components/products-showcase/products-showcase'
import type { SearchPageLayoutProps } from '@/layouts/search-page-layout'
import {
  getStaticPropsPage,
  SearchPageLayout,
} from '@/layouts/search-page-layout'

export default function Home(props: SearchPageLayoutProps) {
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
      <CarouselHome />
      <CategoriasGenero />

      <ProductsShowcase
        title="Lo Nuevo en Zapatillas"
        indexId="Men"
        query="nike"
        hitComponent={ProductCardHitShowcase}
      />
      <BannerPromociones />
      <ProductsShowcase
        title="Primavera / Verano 2023"
        indexId="spring-summer-2021"
        ruleContexts={['home-spring-summer-2021']}
        className="laptop:bg-gray-50"
        hitComponent={ProductCardHitShowcase}
      />
      <ProductsShowcase
        title="Recomendado Para ti"
        indexId="recommended"
        query="Clothing"
        hitComponent={ProductCardHitShowcase}
      />
      <CarouselMarcasHome />
    </SearchPageLayout>
  )
}

export const getStaticProps = () => getStaticPropsPage(Home)
