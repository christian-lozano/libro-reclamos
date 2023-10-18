import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { Configure } from 'react-instantsearch-dom'

import { CarouselMarcasHome } from '@/components/carousel/carousel-marcas-home'
import { ProductCardHitShowcase } from '@/components/product-card/product-card-hit'
import { ProductsShowcase } from '@/components/products-showcase/products-showcase'
import type { SearchPageLayoutProps } from '@/layouts/search-page-layout'
import {
  getStaticPropsPage,
  SearchPageLayout,
} from '@/layouts/search-page-layout'

const data = {
  // --------------------------------------
  dataPageMujer: {
    page: 'Mujer',
    nav: [
      {
        title: 'Calzado',
        url: '/catalog/Women/Shoes/Sneakers?q=sneakers&p=1&indices%5BSTAGING_pwa_ecom_ui_template_products_query_suggestions%5D%5Bpage%5D=1',
      },
      { title: 'Ropa', url: '/catalog/Women/Clothing?p=1' },
      { title: 'Accesorios', url: '/catalog/Accessories/Women?p=1' },
      {
        title: 'Descuento',
        url: '/catalog?p=1&sortBy=STAGING_pwa_ecom_ui_template_products_price_asc',
      },
    ],
    cardHeader: {
      imgDesktop:
        'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1253,c_limit/071dc223-dc22-4474-ae5d-17ce75940bbe/women-s-shoes-clothing-accessories.jpg',
      imgMobil:
        'https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/BJKZ_STG/on/demandware.static/-/Library-Sites-NikePeruSharedLibrary/default/dw992bbf81/Landings/Mujeres/Imagenes/801134_SU23_Womens_Bras_OM_JustinePierre_00473%202.jpg',
      titulo: 'POLAR TECNOLÓGICO NIKE',
      desc: 'Diseñado según las especificaciones exactas de los atletas de campeonato.',
      url: '/catalog?q=women',
    },
    tituloRecienLlegados: 'Recien Llegados',

    cardRecienLLegados: [
      {
        titulo: 'Lo Mejor para Primavera',
        img: 'https://cdn.sanity.io/images/qa41whrn/prod/1fa8b2ab7873ca01c984d05e8d1b4e3cc24a037f-1536x1536.jpg?w=2160&q=80&auto=format',
        url: '/catalog?q=women',
      },

      {
        titulo: 'Nike ACG',
        img: 'https://cdn.sanity.io/images/qa41whrn/prod/2f9d331e815de76fdca6838290a344d7730b46c5-1536x1536.jpg?w=2160&q=80&auto=format',
        url: '/product/M0E20000000EBK7?queryID=a65b8b1540582dfb486bc0c6c06c9c9c',
      },
    ],
    caracteristicasTitle: 'Estilos Destacados',
    cartPopular: [
      {
        id: '01232as142',
        filtro: 'Ropa',
        img: 'https://www.nike.com.pe/dw/image/v2/BJKZ_PRD/on/demandware.static/-/Library-Sites-NikePeruSharedLibrary/default/dwe23082ad/Landings/Mujeres/Imagenes/ropadk@2x.jpg',
        url: '/catalog/Women/Clothing',
      },

      {
        id: '031afdg2321',
        filtro: 'Bras',
        img: 'https://www.nike.com.pe/dw/image/v2/BJKZ_PRD/on/demandware.static/-/Library-Sites-NikePeruSharedLibrary/default/dw3d481f3e/Landings/Mujeres/Imagenes/brasdk@2x.jpg',
        url: '/catalog/Women',
      },

      {
        id: '031af12dg2321',
        filtro: 'Calzado',
        img: 'https://www.nike.com.pe/dw/image/v2/BJKZ_PRD/on/demandware.static/-/Library-Sites-NikePeruSharedLibrary/default/dw80f95979/Landings/Mujeres/Imagenes/calzadodk@2x.jpg',
        url: '/catalog/Women/Shoes',
      },
      {
        id: '031af12dg2321',
        filtro: 'Accesorios',
        img: 'https://www.nike.com.pe/dw/image/v2/BJKZ_PRD/on/demandware.static/-/Library-Sites-NikePeruSharedLibrary/default/dweb473897/Landings/Mujeres/Imagenes/accesoriosdk@2x.jpg',
        url: '/catalog/Women/Clothing',
      },
    ],
    footerCarousel: 'Más para explorar',

    carouselPopularMobil: [
      {
        id: '123213fdasd',
        filtro: 'Ropa',
        img: 'https://images.puma.com/image/upload/q_auto,f_auto,w_600/regional/~global~product~agency~65~6585~658522~658522_06~658522_06_mod01.png/fmt/jpg/fmt/png',
      },
      {
        id: 'asd12321f',
        filtro: 'Calzado',
        img: 'https://images.puma.com/image/upload/q_auto,f_auto,w_600/regional/~global~product~agency~65~6585~658522~658522_06~658522_06_mod01.png/fmt/jpg/fmt/png',
      },
      {
        id: '123ds123',
        filtro: 'Accesorios',

        img: 'https://images.puma.com/image/upload/q_auto,f_auto,w_600/regional/~global~product~agency~65~6585~658522~658522_06~658522_06_mod01.png/fmt/jpg/fmt/png',
      },
      {
        id: '123d213s',
        filtro: 'Brass',

        img: 'https://images.puma.com/image/upload/q_auto,f_auto,w_600/regional/~global~product~agency~65~6585~658522~658522_06~658522_06_mod01.png/fmt/jpg/fmt/png',
      },
    ],
  },
  // -------------------------------------
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
      <nav
        className={`w-full  bg-white xl:bg-black flex justify-center  mt-14 xl:mt-0  ${
          altoScroll > 10
            ? `translate-y-3 top-0 transition ease-in-out  `
            : 'translate-y-0  top-0 transition ease-in-out shadow-sm '
        } `}
      >
        <div className="flex 2xl:justify-center  xl:justify-center justify-start flex-col items-start  xl:items-center xl:py-5 w-full px-5 md:px-10">
          <h2
            className={`text-black xl:ml-5 2xl:ml-10 xl:absolute md:text-start mt-3 xl:mt-0   2xl:absolute left-0  xl:text-white text-lg font-medium font-sans ${
              altoScroll > 30 ? ' text-base xl:text-2xl' : 'text-lg xl:text-xl'
            }`}
          >
            {data.dataPageMujer.page}
          </h2>

          <div className="xl:w-2/5    2xl:w-2/6 lg:w-2/5 md:w-3/5 sm:w-2/5 w-full flex justify-between items-end py-2  ">
            {data.dataPageMujer.nav.map((el, i) => (
              <Link
                key={i}
                href={el.url}
                className="font-sans text-lg font-semibold xl:text-lg "
              >
                <span className="md:text-white text-black cursor-pointer">
                  {el.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <main className="mx-3 md:mx-4 xl:mx-0">
        {/* header */}
        <div className="p-0 ml-0 mr-0 pl-0 pr-0  flex flex-col justify-center w-full xl:mt-32 2xl:mt-16 mt-10 sm:mt-16 md:relative ">
          <img
            src={data.dataPageMujer.cardHeader.imgDesktop}
            alt=""
            className="xl:block 2xl:block md:block hidden"
          />
          <img
            src={data.dataPageMujer.cardHeader.imgMobil}
            alt=""
            className="xl:hidden 2xl:hidden md:hidden block"
          />

          <figcaption className="md:absolute mt-2 md:flex md:flex-col md:h-full md:items-start md:py-8 md:justify-end xl:py-56 xl:px-20">
            <div className="md:px-5">
              {' '}
              <h4 className="font-extrabold  text-4xl md:text-3xl text-black xl:text-4xl md:text-white uppercase">
                {data.dataPageMujer.cardHeader.titulo}
              </h4>
            </div>
            <div className="md:p-5 py-5 w-2/3 md:w-full md:px-5 ">
              <p className="text-black md:text-white xl:text-lg">
                {data.dataPageMujer.cardHeader.desc}
              </p>
            </div>
            <div className=" md:px-5">
              <a
                href={data.dataPageMujer.cardHeader.url}
                className="px-5 py-2 text-sm bg-black text-white  md:text-black md:bg-white font-semibold font-sans xl:text-lg"
              >
                Tienda
              </a>
            </div>
          </figcaption>
        </div>

        {/* recién Llegados */}
        <div className="mt-20 xl:flex xl:justify-center xl:w-full xl:flex-col xl:items-center">
          <h2 className="py-5 text-2xl 2xl:text-4xl font-bold">
            {data.dataPageMujer.tituloRecienLlegados}
          </h2>
          {/* ------------ */}

          <div className="grid gap-y-4 grid-cols-1 md:grid-cols-2 md:gap-x-5 2xl:container  ">
            {data.dataPageMujer.cardRecienLLegados.map((el, i) => (
              <a key={i} href={el.url}>
                <figure className="cursor-pointer">
                  <div className="h-full w-full relative ">
                    <div>
                      <img src={el.img} alt="" className="w-[100%]" />
                    </div>
                    <figcaption className="absolute bottom-0 p-6 2xl:p-15">
                      <div>
                        <div className="my-7">
                          {/* <h2 className="text-white text-lg">Nike ACG</h2> */}
                          <h3 className="text-white py-1 text-2xl 2xl:text-3xl 2xl:font-extrabold 2xl:font-sans font-medium">
                            {el.titulo}
                          </h3>
                        </div>
                        <span className="bg-white text-black" />
                      </div>
                    </figcaption>
                  </div>
                </figure>
              </a>
            ))}
          </div>

          {/* -------------------------- */}
        </div>
        {/* popular */}
        <section className="w-full h-full  flex-col items-center  xl:flex justify-center mt-20">
          <h2 className="py-5 text-2xl 2xl:text-4xl font-bold">
            {data.dataPageMujer.caracteristicasTitle}
          </h2>
          <div className="grid  grid-cols-1 md:grid-cols-2 gap-2 h-full  container">
            {data.dataPageMujer.cartPopular.map((el, i) => (
              <a key={i} href={el.url}>
                <figure className="cursor-pointer">
                  <div className="h-full w-full relative ">
                    <div>
                      <img src={el.img} alt="" className="w-100%" />
                    </div>
                    <figcaption className="absolute bottom-0 p-6 2xl:p-15">
                      <div>
                        <div className="m-1">
                          {/* <h2 className="text-white text-lg">Nike ACG</h2> */}
                          <h3 className="text-black py-1 text-2xl 2xl:text-3xl 2xl:font-extrabold 2xl:font-sans font-medium">
                            {el.filtro}
                          </h3>
                        </div>
                        <span className="bg-white text-white" />
                      </div>
                    </figcaption>
                  </div>
                </figure>
              </a>
            ))}
          </div>
        </section>
      </main>

      <ProductsShowcase
        title="Lo Nuevo en Zapatillas"
        indexId="Sneakers"
        query="Sneakers"
        hitComponent={ProductCardHitShowcase}
      />
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
      <CarouselMarcasHome />
    </SearchPageLayout>
  )
}
export const getStaticProps = () => getStaticPropsPage(Home)
