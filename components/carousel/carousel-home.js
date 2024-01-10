import Link from 'next/link'
import Carousel from 'nuka-carousel'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

import { Button } from '../@ui/button/button'



const sliderDesktop = [
  // {
  //   title: '',
  //   color: 'black',
  //   desc: '',
  //   img: 'https://res.cloudinary.com/dmtq82guq/image/upload/v1700839900/ecommerce-fritz-sport/slider-home/black-desktop_nfyqgw.png',
  //   url: '#',
  // },
  {
    title: 'ZAPATILLAS X_PLORBOOST',
    color: 'black',
    desc: 'Recién llegadas.',
    img: 'https://res.cloudinary.com/da868wsih/image/upload/v1702510427/fritz-ecommerce/slider-home/1920-x-853_b5ty4m.jpg',
    url: '/product/ID9596?queryID=3ee2971600e3c9efe6853d1e77236304',
  },
  // {
  //   title: 'PACK CRAZYRUSH',
  //   desc: 'Recién llegadas.',
  //   color: 'black',
  //   img: 'https://res.cloudinary.com/dmtq82guq/image/upload/v1700839901/ecommerce-fritz-sport/slider-home/imageMobile3_bmvzka.jpg',
  //   url: '#',
  // },
]
const sliderMobil = [
  // {
  //   title: '',
  //   desc: '',
  //   color: 'black',
  //   img: 'https://res.cloudinary.com/dmtq82guq/image/upload/v1700839898/ecommerce-fritz-sport/slider-home/black-mobil-3_p2diza.png',
  //   url: '#',
  // },
  {
    title: 'CHIMPUNES ADIDAS PREDATOR ACCURACY.3',
    desc: 'Recién llegadas.',
    color: 'black',
    img: 'https://res.cloudinary.com/da868wsih/image/upload/v1702574737/fritz-ecommerce/slider-home/600-x-771_friwm4.jpg',
    url: '/product/ID9596?queryID=3ee2971600e3c9efe6853d1e77236304',
  },
  // {
  //   title: 'MARINERUSH PACK',
  //   desc: 'Recién llegadas.',
  //   color: 'black',
  //   img: 'https://res.cloudinary.com/dmtq82guq/image/upload/v1700839900/ecommerce-fritz-sport/slider-home/imageMobile2_mkwldp.jpg',
  //   url: '#',
  // },
]

const sliderTablet = [
  {
    title: 'CHIMPUNES ADIDAS PREDATOR ACCURACY.3',
    desc: 'Recién llegadas.',
    color: 'black',
    img: 'https://res.cloudinary.com/da868wsih/image/upload/v1702574711/fritz-ecommerce/slider-home/960-x-960_o3wvlk.jpg',
    url: '/product/ID9596?queryID=3ee2971600e3c9efe6853d1e77236304',
  },
]




export default function CarouselHome() {

  const [carouselDesktop, setCarouselDesktop] = useState([])
  const [carouselMobil, setCarouselMobil] = useState([])
  const [carouselTablet, setCarouselTablet] = useState([])


  async function fetchCarouselDesktop() {
      const request = await fetch("/api/home/sliderDesktop")
      const data = await request.json()
      setCarouselDesktop(data)
  }

  async function fetchCarouselMobil() {
    const request = await fetch("/api/home/sliderMobil")
    const data = await request.json()
    setCarouselMobil(data)
}

async function fetchCarouselTablet() {
  const request = await fetch("/api/home/sliderTablet")
  const data = await request.json()
  setCarouselTablet(data)
}
useEffect(()=>{
  fetchCarouselDesktop()
  fetchCarouselMobil()
  fetchCarouselTablet()
}, [])


  // console.log(data.attributes.SliderDesktop.data);
  const [indiceSlider, setIndiceSlider] = useState(0)
  useEffect(() => {}, [indiceSlider])
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 950 })
  const isTablet = useMediaQuery({ maxWidth: 950, minWidth: 600 })


  if (carouselDesktop.length === 0 ) return  <div>Cargando..</div>
  if (!carouselDesktop && !isTablet && carouselMobil.length === 0 ) return   <div>Cargando..</div>
  if ( isTablet && carouselTablet.length === 0 ) return   <div>Cargando..</div>

  return (
    <>
      {isDesktopOrLaptop || isTablet ? (
        <>
          {isDesktopOrLaptop && (
            <div>
              <Carousel
                autoplay={true}
                autoplayInterval={8000}
                wrapAround={true}
                withoutControls={true}
                adaptiveHeight={true}
                zoomScale={1}
                enableKeyboardControls={true}
                // speed={100}
                // slideIndex={indiceSlider}
                // dragThreshold={1}
                afterSlide={(i) => setIndiceSlider(i)}
                // slideCount={indiceSlider}
              >
                {carouselDesktop.map((el) => (
                  <div key={el._id}>
                    <div className="">
                      <img className="z-dev" src={el.secure_url} alt="" />
                      <div className="relative text-2xl text-black flex justify-start xl:ml-16 2xl:ml-40 ml-20 items-start top-24 bottom-0 w-full h-full z-50">
                        <div className="absolute flex flex-col items-start justify-start  text w-auto bottom-[calc(14vh)]">
                          {/* <h6
                            className={`text-center  xl:text-4xl  2xl:text-2xl font-black  text-${el.color}`}
                          >
                            {' '}
                            {el.title}
                          </h6>
                          <p
                            className={`text-center mt-1  text-${el.color} text-lg`}
                          >
                            {el.desc}
                          </p> */}
                          <Link href={"/product/ID9596?queryID=ac3ef93bfc89a92418eec2ab726a4420"}>
                            <Button
                              className={`bg-white flex justify-around text-lg font-medium border border-black shadow-lg text-black mt-5 w-64 py-2 px-2 rounded-sm uppercase`}
                            >
                              Comprar Ahora
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                              </svg>
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
              <div className="flex w-full mt-5 ">
                {carouselDesktop.map((el, i) => (
                  <div
                    key={i}
                    // onClick={() => setIndiceSlider(i)}
                    className=" w-full bg-transparent "
                  >
                    <div className="w-full bg-blue-gray-100">
                      <div
                        className={`p-[1.2px] w-full transition   ease-in-out ${
                          i === indiceSlider && 'bg-black '
                        }`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {isTablet && (
            <div>
              <Carousel
                // autoplay={true}
                autoplay={true}
                // autoplayInterval={10000}
                autoplayInterval={5000}
                wrapAround={true}
                withoutControls={true}
                adaptiveHeight={true}
                zoomScale={1}
                enableKeyboardControls={true}
                // speed={100}
                // goToSlide={indiceSlider}
                // slideIndex={indiceSlider}
                // dragThreshold={0}
                afterSlide={(i) => setIndiceSlider(i)}
                // slideCount={indiceSlider}
              >
                {carouselTablet.map((el, i) => (
                  <div key={el._id} className="mt-12">
                    <div className="">
                      <img className="z-dev" src={el.secure_url} alt="" />
                      <div className="relative text-2xl text-black flex justify-center top-0 bottom-0 w-full h-full z-50">
                        <div className="absolute flex flex-col items-center justify-center  text w-auto bottom-[calc(2vw)]">
                          {/* <h6
                            className={`text-center text-xl font-black text-${el.color}`}
                          >
                            {' '}
                            {el.title}
                          </h6>
                          <p
                            className={`text-center text-${el.color} text-base`}
                          >
                            {el.desc}
                          </p> */}
                          <Link href={"/product/ID9596?queryID=ac3ef93bfc89a92418eec2ab726a4420"}>
                            <Button
                              className={`bg-white flex justify-around items-center text-sm font-medium border border-black shadow-lg text-black mt-5 w-48 py-1 px-2 rounded-sm uppercase`}
                            >
                              Comprar Ahora
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                              </svg>
                            </Button>

                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>

              <div className="flex w-full mt-0">
                {carouselTablet.map((el, i) => (
                  <div
                    key={i}
                    // onClick={() => setIndiceSlider(i)}
                    className="py-5 w-full bg-transparent "
                  >
                    <div className="w-full bg-blue-gray-100">
                      <div
                        className={`p-[1px] w-full transition  ease-in-out ${
                          i === indiceSlider && 'bg-black '
                        }`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <div>
            <Carousel
              // autoplay={true}
              autoplay={true}
              // autoplayInterval={10000}
              autoplayInterval={5000}
              wrapAround={true}
              withoutControls={true}
              adaptiveHeight={true}
              zoomScale={1}
              enableKeyboardControls={true}
              // speed={100}
              // goToSlide={indiceSlider}
              // slideIndex={indiceSlider}
              // dragThreshold={0}
              afterSlide={(i) => setIndiceSlider(i)}
              // slideCount={indiceSlider}
            >
              {carouselMobil.map((el) => (
                <div key={el._id} className="mt-12">
                  <div className="">
                    <img className="z-dev" src={el.secure_url} alt="" />
                    <div className="relative text-2xl text-black flex justify-center top-0 bottom-0 w-full h-full z-50">
                      <div className="absolute flex flex-col items-center justify-end  text w-auto bottom-[calc(7vw)]">
                        {/* <h6
                          className={`text-center text-xl font-black text-${el.color}`}
                        >
                          {' '}
                          {el.title}
                        </h6>
                        <p className={`text-center text-${el.color} text-base`}>
                          {el.desc}
                        </p> */}
                        <Link href={"/product/ID9596?queryID=ac3ef93bfc89a92418eec2ab726a4420"}>
                        <Button
                          className={`bg-white  flex justify-around items-center text-sm font-medium border border-black shadow-lg text-black w-48 py-1 px-2 rounded-sm uppercase`}
                        >
                          Comprar Ahora
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </Button>

                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
            <div className="flex w-full mt-0">
              {carouselMobil.map((el, i) => (
                <div
                  key={i}
                  // onClick={() => setIndiceSlider(i)}
                  className="py-5 w-full bg-transparent "
                >
                  <div className="w-full bg-blue-gray-100">
                    <div
                      className={`p-[1px] w-full transition  ease-in-out ${
                        i === indiceSlider && 'bg-black '
                      }`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  )
}



