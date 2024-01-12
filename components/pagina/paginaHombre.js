import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'

import { useMediaQuery } from 'react-responsive'

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


export default function PaginaMujer({props}) {

    const isDesktopOrLaptop = useMediaQuery({ minWidth: 950 })


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
  if(!props.MujerPortadaDesktop || !props.MujerLoMasNuevo) return <div>Cargando..</div>

  // MujerLoMasNuevo,
  // MujerDestacado,
  return (
    <div>
          <nav
        className={`w-full  bg-white xl:bg-black flex justify-center mt-14 xl:mt-0  ${
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
            {data.dataPageHombre.page}
          </h2>

          <div className="xl:w-2/5    2xl:w-2/6 lg:w-2/5 md:w-3/5 sm:w-2/5 w-full flex justify-between items-end py-2  ">
            {data.dataPageHombre.nav.map((el, i) => (
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
        
        {


            isDesktopOrLaptop  && (
                <>
                     { props.HombrePortadaDesktop.map(el=>(
                                <img
                                    src={el.secure_url}
                                    alt=""
                                    className=""
                                />


                    ))}
                </>
            ) 

        }    
        {


            !isDesktopOrLaptop  && (
                <>
                    { props.HombrePortadaMobil.map(el=>(
                                <img
                                    src={el.secure_url}
                                    alt=""
                                    className=""
                                />


                    ))}
                </>
            ) 

            }    


          <figcaption className="md:absolute mt-2 md:flex md:flex-col md:h-full md:items-start md:py-8 md:justify-end xl:py-56 xl:px-20">
            <div className="md:px-5">
              {' '}
              <h4 className="font-extrabold  text-4xl md:text-3xl text-black xl:text-4xl md:text-white uppercase">
                {data.dataPageHombre.cardHeader.titulo}
              </h4>
            </div>
            <div className="md:p-5 py-5 w-2/3 md:w-full md:px-5 ">
              <p className="text-black md:text-white xl:text-lg">
                {data.dataPageHombre.cardHeader.desc}
              </p>
            </div>
            <div className=" md:px-5">
              <a
                href={data.dataPageHombre.cardHeader.url}
                className="px-5 py-2 text-sm bg-black text-white  md:text-black md:bg-white font-semibold font-sans xl:text-lg"
              >
                Tienda
              </a>
            </div>
          </figcaption>
        </div>
        {/* <ProductsShowcase
          title="Lo Nuevo Para Hombre de Adidas"
          query={['hombre', 'adidas']}
          indexId="spring-summer-2021"
          ruleContexts={['mujer', 'adidas']}
          className="laptop:bg-gray-50 "
          hitComponent={ProductCardHitShowcase}
        /> */}
        {/* recién Llegados */}
        <div className="mt-20 xl:flex xl:justify-center xl:w-full xl:flex-col xl:items-center">
          <h2 className="py-5 text-2xl 2xl:text-4xl font-bold">
            {data.dataPageHombre.tituloRecienLlegados}
          </h2>
          {/* ------------ */}

          <div className="grid gap-y-4 grid-cols-1 md:grid-cols-2 md:gap-x-5 2xl:container  ">
            {props.HombreLoMasNuevo.map((el, i) => (
              <Link href={el.button_url} key={i}>
                <figure>
                  <div className="h-full cursor-pointer w-full relative ">
                    <div>
                      <img src={el.secure_url} alt="" className="w-[100%]" />
                    </div>
                    <figcaption className="absolute bottom-0 p-6 2xl:p-15">
                      <div>
                        <div className="my-7">
                          {/* <h2 className="text-white text-lg">Nike ACG</h2> */}
                          <h3 className="text-black py-1 text-2xl 2xl:text-3xl 2xl:font-extrabold 2xl:font-sans font-medium">
                            {el.button_title}
                          </h3>
                        </div>
                        <span className="bg-white text-black" />
                      </div>
                    </figcaption>
                  </div>
                </figure>
              </Link>
            ))}
          </div>

          {/* -------------------------- */}
        </div>

        {/* popular */}
        <section className="w-full h-full  flex-col items-center  xl:flex justify-center mt-20">
          <h2 className="py-5 text-2xl 2xl:text-4xl font-bold">
            {data.dataPageHombre.caracteristicasTitle}
          </h2>
          <div className="grid  grid-cols-1 md:grid-cols-2   gap-2 h-full  container">
            {props.HombreDestacado.map((el, i) => (
              <Link href={el.button_url} key={i}>
                <figure className="cursor-pointer">
                  <div className="h-full w-full relative ">
                    <div>
                      <img src={el.secure_url} alt="" className="w-100%" />
                    </div>
                    <figcaption className="absolute bottom-0 p-6 2xl:p-15">
                      <div>
                        <div className="m-1">
                          {/* <h2 className="text-white text-lg">Nike ACG</h2> */}
                          <h3 className="text-black py-1 text-2xl 2xl:text-3xl 2xl:font-extrabold 2xl:font-sans font-medium">
                            {el.button_title}
                          </h3>
                        </div>
                        <span className="bg-white text-white" />
                      </div>
                    </figcaption>
                  </div>
                </figure>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
