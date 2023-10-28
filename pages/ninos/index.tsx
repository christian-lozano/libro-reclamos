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
  dataPageNinos: {
    page: 'Niños',
    nav: [
      { title: 'Calzado', url: '/catalog?q=zapatillas%20niños&p=1' },
      { title: 'Ropa', url: '/catalog?q=ropa%20niños&p=1' },
      {
        title: 'Accesorios',
        url: '/catalog?q=accesorios%20niños&p=1',
      },
      {
        title: 'Descuento',
        url: '/catalog/niños?sortBy=pwa_ecom_ui_template_products_price_asc&p=1',
      },
    ],
    cardHeader: {
      imgDesktop:
        'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/3e88b7a0-cb45-4c8c-ac18-777e704e01cf/nike-kids-shoes-clothing-and-accessories-nike-com.jpg',
      imgMobil:
        'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_594,c_limit/072ae522-a82a-4b9c-a66f-04980766ccd5/nike-kids-shoes-clothing-and-accessories-nike-com.jpg',
      titulo: 'POLAR TECNOLÓGICO NIKE',
      desc: 'Diseñado según las especificaciones exactas de los atletas de campeonato.',
      url: '/productos/ninos',
    },
    tituloRecienLlegados: 'Recien Llegados',

    cardRecienLLegados: [
      {
        titulo: 'Lo Mejor para Primavera',
        img: 'https://cdn.sanity.io/images/qa41whrn/prod/39c75b85700442a4b0b1b73d33468b5d99f3b221-1536x1536.jpg?w=2160&q=80&auto=format',
        url: '/productos/ninos',
      },

      {
        titulo: 'Nike ACG',
        img: 'https://cdn.sanity.io/images/qa41whrn/prod/0218b2b5ebbfe1d26c927c78216879e1e09ff809-1536x1536.jpg?w=2160&q=80&auto=format',
        url: '/productos/ninos',
      },
    ],
    caracteristicasTitle: 'Estilos Destacados',
    cartPopular: [
      {
        id: '01232as142',
        filtro: 'Niño',
        img: 'https://www.nike.com.pe/dw/image/v2/BJKZ_PRD/on/demandware.static/-/Library-Sites-NikePeruSharedLibrary/default/dw2eeef74f/Guias%20Nike/ninos-nike.jpg',
        url: '/productos/ninos',
      },

      {
        id: '031afdg2321',
        filtro: 'Niña',
        img: 'https://www.nike.com.pe/dw/image/v2/BJKZ_PRD/on/demandware.static/-/Library-Sites-NikePeruSharedLibrary/default/dw0c198359/Guias%20Nike/ninas-nike.jpg',
        url: '/productos/ninos',
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
            {data.dataPageNinos.page}
          </h2>

          <div className="xl:w-2/5    2xl:w-2/6 lg:w-2/5 md:w-3/5 sm:w-2/5 w-full flex justify-between items-end py-2  ">
            {data.dataPageNinos.nav.map((el, i) => (
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
            src={data.dataPageNinos.cardHeader.imgDesktop}
            alt=""
            className="xl:block 2xl:block md:block hidden"
          />
          <img
            src={data.dataPageNinos.cardHeader.imgMobil}
            alt=""
            className="xl:hidden 2xl:hidden md:hidden block"
          />

          <figcaption className="md:absolute mt-2 md:flex md:flex-col md:h-full md:items-start md:py-8 md:justify-end xl:py-56 xl:px-20">
            <div className="md:px-5">
              {' '}
              <h4 className="font-extrabold  text-4xl md:text-3xl text-black xl:text-4xl md:text-white uppercase">
                {data.dataPageNinos.cardHeader.titulo}
              </h4>
            </div>
            <div className="md:p-5 py-5 w-2/3 md:w-full md:px-5 ">
              <p className="text-black md:text-white xl:text-lg">
                {data.dataPageNinos.cardHeader.desc}
              </p>
            </div>
            <div className=" md:px-5">
              <a
                href={data.dataPageNinos.cardHeader.url}
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
            {data.dataPageNinos.tituloRecienLlegados}
          </h2>
          {/* ------------ */}

          <div className="grid gap-y-4 grid-cols-1 md:grid-cols-2 md:gap-x-5 2xl:container  ">
            {data.dataPageNinos.cardRecienLLegados.map((el, i) => (
              <figure key={i}>
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
            ))}
          </div>

          {/* -------------------------- */}
        </div>
        {/* popular */}
        <section className="w-full h-full  flex-col items-center  xl:flex justify-center mt-20">
          <h2 className="py-5 text-2xl 2xl:text-4xl font-bold">
            {data.dataPageNinos.caracteristicasTitle}
          </h2>
          <div className="grid  grid-cols-1 md:grid-cols-2  gap-2 h-full  container">
            {data.dataPageNinos.cartPopular.map((el, i) => (
              <figure key={i} className="cursor-pointer">
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
