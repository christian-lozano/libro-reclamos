
import { Configure } from 'react-instantsearch-dom'

import { BannerPromociones } from '@/components/body-home/banner-promociones'
import { CategoriasGenero } from '@/components/body-home/categorias-genero'
import CarouselHome from '@/components/carousel/carousel-home'
import { CarouselMarcasHome } from '@/components/carousel/carousel-marcas-home'
import { ProductCardHitShowcase } from '@/components/product-card/product-card-hit'
import { ProductsShowcase } from '@/components/products-showcase/products-showcase'
import { HeaderNew } from '../header/header-new'
import BuscadorHome from '../BuscadorHome/BuscadorHome'
export default function PaginaHome({props}) {
  return (
    <div>

    <HeaderNew props={props}/>

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
        indexId="ropa"
        ruleContexts={['ropa']}
        className="laptop:bg-gray-50"
        hitComponent={ProductCardHitShowcase}
        
      />

      <BannerPromociones props={props} />
      <ProductsShowcase
        title="Verano 2024"
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
    </div>
  )
}
