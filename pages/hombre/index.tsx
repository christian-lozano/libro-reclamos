import { useCallback, useEffect, useState } from 'react'
import { Configure } from 'react-instantsearch-dom'

import { CarouselMarcasHome } from '@/components/carousel/carousel-marcas-home'
import type { SearchPageLayoutProps } from '@/layouts/search-page-layout'
import {
  getStaticPropsPage,
  SearchPageLayout,
} from '@/layouts/search-page-layout'

const data = {
  dataPageHombre: {
    page: 'Hombre',
    nav: [
      {
        title: 'Calzado',
        url: '/catalog?pwa_ecom_ui_template_products%5Bquery%5D=hombre%20zapatillas',
      },
      {
        title: 'Ropa',
        url: '/catalog?pwa_ecom_ui_template_products%5Bquery%5D=hombre%20ropa',
      },
      {
        title: 'Accesorios',
        url: '/catalog?',
      },
      {
        title: 'Descuento',
        url: '/catalog?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A200',
      },
    ],
    cardHeader: {
      imgDesktop:
        'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/b759c6d4-9cea-4980-a66b-cb0763c67632/men-s-shoes-clothing-accessories.jpg',
      imgMobil:
        'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_500,c_limit/de4714b2-e631-4e6a-89d9-afa2f16434cf/men-s-shoes-clothing-accessories.jpg',
      titulo: 'LO MEJOR EN ROPA NIKE',
      desc: 'Diseñado según las especificaciones exactas de los atletas de campeonato.',
      url: '/catalog?pwa_ecom_ui_template_products%5Bquery%5D=hombre',
    },

    tituloRecienLlegados: 'Recién Llegados',

    cardRecienLLegados: [
      {
        titulo: 'Casacas',
        img: 'https://res.cloudinary.com/da868wsih/image/upload/v1702675605/fritz-ecommerce/products/ropa/HS3617/Sudadera_entrenamiento_Tiro_23_Club_Negro_HS3617_21_model_kmsqiy.webp',
        url: '/catalog?pwa_ecom_ui_template_products%5Bquery%5D=hombre%20casacas',
      },

      {
        titulo: '',
        img: 'https://res.cloudinary.com/da868wsih/image/upload/v1702574711/fritz-ecommerce/slider-home/960-x-960_o3wvlk.jpg',
        url: '/product/ID9596?queryID=02ae71bb3187d93289648f97243df479',
      },
    ],
    caracteristicasTitle: 'Estilos Destacados',
    cartPopular: [
      {
        id: '01232as142',
        filtro: 'Calzado',
        img: 'https://res.cloudinary.com/da868wsih/image/upload/v1702406524/fritz-ecommerce/products/zapatillas/ID2264/Zapatillas_Runfalcon_3_TR_Negro_ID2264_06_standard_cs0qdw.webp',
        url: '/catalog?pwa_ecom_ui_template_products%5Bquery%5D=hombre%20zapatillas',
      },

      {
        id: '031afdg2321',
        filtro: 'Accesorios',
        url: '/catalog?pwa_ecom_ui_template_products%5Bquery%5D=hombre',

        img: 'https://www.nike.com.pe/dw/image/v2/BJKZ_PRD/on/demandware.static/-/Library-Sites-NikePeruSharedLibrary/default/dwd68f3746/Landings/Hombres/Imagenes/accesoriosdk@2x.jpg',
      },
    ],
    footerCarousel: 'Más para explorar',

    carouselPopularMobil: [
      {
        id: '01231d121',
        filtro: 'Ropa',
        url: '/catalog?pwa_ecom_ui_template_products%5Bquery%5D=hombre%20ropa',

        img: 'https://images.puma.com/image/upload/q_auto,f_auto,w_600/regional/~global~product~agency~65~6585~658522~658522_06~658522_06_mod01.png/fmt/jpg/fmt/png',
      },
      {
        id: '01232as142',
        filtro: 'Calzado',
        url: '/catalog?pwa_ecom_ui_template_products%5Bquery%5D=hombre%20zapatillas',

        img: 'https://images.puma.com/image/upload/q_auto,f_auto,w_600/regional/~global~product~agency~65~6585~658522~658522_06~658522_06_mod01.png/fmt/jpg/fmt/png',
      },
      {
        id: '031afdg2321',
        filtro: 'Accesorios',
        url: '/catalog?pwa_ecom_ui_template_products%5Bquery%5D=hombre%20accesorios',

        img: 'https://images.puma.com/image/upload/q_auto,f_auto,w_600/regional/~global~product~agency~65~6585~658522~658522_06~658522_06_mod01.png/fmt/jpg/fmt/png',
      },
    ],
  },
}

export default function Home(props: SearchPageLayoutProps) {
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
    <SearchPageLayout {...props}>
      <Configure
        hitsPerPage={6}
        // We cannot retrieve the user token at build time, so we disable perso
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

      {/* <BannerPromociones /> */}
      {/* <ProductsShowcase
        title="Primavera / Verano 2023"
        indexId="spring-summer-2021"
        ruleContexts={['home-spring-summer-2021']}
        className="laptop:bg-gray-50"
        hitComponent={ProductCardHitShowcase}
      /> */}
      {/* <ProductsShowcase
        title="Recomendado Para ti"
        indexId="recommended"
        query="jacket"
        hitComponent={ProductCardHitShowcase}
      /> */}
      <CarouselMarcasHome props={props} />
    </SearchPageLayout>
  )
}
export const getStaticProps = async () => {
  const resPortadaDesktop = await fetch(
    'https://www.fritzsport.pe/api/mujer/mujerPortadaDesktop'
  )

  // const resPortadaMobil = await fetch(
  //   'https://www.fritzsport.pe/api/mujer/mujerPortadaMobil'
  // )

  const MujerPortadaDesktop = await resPortadaDesktop.json()
  // const MujerPortadaMobil = await resPortadaMobil.json()

  getStaticPropsPage(Home)
  return {
    props: {
      MujerPortadaDesktop,
      // MujerPortadaMobil,
    },
    revalidate: 80, // In seconds
  }
}
