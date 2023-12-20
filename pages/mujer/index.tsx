import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { Configure } from 'react-instantsearch-dom'

import { CarouselMarcasHome } from '@/components/carousel/carousel-marcas-home'
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
        url: '/catalog?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
      },
      {
        title: 'Ropa',
        url: '/catalog?pwa_ecom_ui_template_products%5Bquery%5D=mujer%20ropa',
      },
      {
        title: 'Accesorios',
        url: '/catalog?pwa_ecom_ui_template_products%5Bquery%5D=mujer%20accesorios',
      },
      {
        title: 'Descuento',
        url: '/catalog?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
      },
    ],
    cardHeader: {
      imgDesktop:
        'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/lam_gift_guide_horizontal_fw23_launch_wglp_banner_d_20ad46d64c.jpg ',
      imgMobil:
        'https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/BJKZ_STG/on/demandware.static/-/Library-Sites-NikePeruSharedLibrary/default/dw992bbf81/Landings/Mujeres/Imagenes/801134_SU23_Womens_Bras_OM_JustinePierre_00473%202.jpg',
      titulo: 'LO MEJOR EN ROPA ADIDAS PARA MUJER',
      desc: '',
      url: '/catalog?pwa_ecom_ui_template_products%5Bquery%5D=mujer%20ropa',
    },
    tituloRecienLlegados: 'Recien Llegados',

    cardRecienLLegados: [
      {
        titulo: 'Lo Mejor para Verano',
        img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ec34b9ceea9e4210bafb179e62a69707_9366/Regata_Canelada_Essentials_Preto_IJ8251_25_model.jpg',
        url: '/catalog?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
      },

      {
        titulo: 'Zapatillas Cómodas',
        img: 'https://res.cloudinary.com/da868wsih/image/upload/v1702404497/fritz-ecommerce/products/zapatillas/IE1992/Tenis_Galaxy_6_Turquesa_IE1992_01_standard_uauwno.webp',
        url: '/catalog?pwa_ecom_ui_template_products%5Bquery%5D=mujer%20zapatillas',
      },
    ],
    caracteristicasTitle: 'Estilos Destacados',
    cartPopular: [
      {
        id: '01232as142',
        filtro: 'Ropa',
        img: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/94cd37a4aa0946f29e59aef900a3be99_9366/polo-corto-aeroready-train-essentials-3-tiras-logo.jpg',
        url: '/catalog?pwa_ecom_ui_template_products%5Bquery%5D=mujer%20ropa',
      },

      {
        id: '01afdg2321',
        filtro: 'Bras',
        img: 'https://www.nike.com.pe/dw/image/v2/BJKZ_PRD/on/demandware.static/-/Library-Sites-NikePeruSharedLibrary/default/dw3d481f3e/Landings/Mujeres/Imagenes/brasdk@2x.jpg',
        url: '/catalog?',
      },

      {
        id: '031af12dg2321',
        filtro: 'Calzado',
        img: 'https://res.cloudinary.com/da868wsih/image/upload/v1702588622/fritz-ecommerce/products/zapatillas/IE9987/Zapatillas_adidas_Court_Plataforma_Blanco_IE9987_06_standard_ng2brq.webp',
        url: '/catalog?pwa_ecom_ui_template_products%5Bquery%5D=mujer%20zapatillas',
      },
      {
        id: '031af12dg2321',
        filtro: 'Accesorios',
        img: 'https://www.nike.com.pe/dw/image/v2/BJKZ_PRD/on/demandware.static/-/Library-Sites-NikePeruSharedLibrary/default/dweb473897/Landings/Mujeres/Imagenes/accesoriosdk@2x.jpg',
        url: '/catalog?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
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
                          <h3 className="text-black py-1 text-2xl 2xl:text-3xl 2xl:font-extrabold 2xl:font-sans font-medium">
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

      <CarouselMarcasHome />
    </SearchPageLayout>
  )
}
export const getStaticProps = () => getStaticPropsPage(Home)
