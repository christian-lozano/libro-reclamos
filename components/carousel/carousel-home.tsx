import Carousel from 'nuka-carousel'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

import { Button } from '../@ui/button/button'

const sliderDesktop = [
  {
    title: '',
    color: 'black',
    desc: '',
    img: 'https://res.cloudinary.com/dmtq82guq/image/upload/v1700839900/ecommerce-fritz-sport/slider-home/black-desktop_nfyqgw.png',
    url: '#',
  },
  {
    title: 'MARINERUSH PACK',
    color: 'black',
    desc: 'Recién llegadas.',
    img: 'https://res.cloudinary.com/dmtq82guq/image/upload/v1700839900/ecommerce-fritz-sport/slider-home/image3_cicsdw.jpg',
    url: '#',
  },
  {
    title: 'PACK CRAZYRUSH',
    desc: 'Recién llegadas.',
    color: 'black',
    img: 'https://res.cloudinary.com/dmtq82guq/image/upload/v1700839901/ecommerce-fritz-sport/slider-home/imageMobile3_bmvzka.jpg',
    url: '#',
  },
]
const sliderMobil = [
  {
    title: '',
    desc: '',
    color: 'black',
    img: 'https://res.cloudinary.com/dmtq82guq/image/upload/v1700839898/ecommerce-fritz-sport/slider-home/black-mobil-3_p2diza.png',
    url: '#',
  },
  {
    title: 'MARINERUSH PACK',
    desc: 'Recién llegadas.',
    color: 'black',
    img: 'https://res.cloudinary.com/dmtq82guq/image/upload/v1700839901/ecommerce-fritz-sport/slider-home/imageMobile3_bmvzka.jpg',
    url: '#',
  },
  {
    title: 'MARINERUSH PACK',
    desc: 'Recién llegadas.',
    color: 'black',
    img: 'https://res.cloudinary.com/dmtq82guq/image/upload/v1700839900/ecommerce-fritz-sport/slider-home/imageMobile2_mkwldp.jpg',
    url: '#',
  },
]

const sliderTablet = [
  {
    title: 'MARINERUSH PACK',
    desc: 'Recién llegadas.',
    color: 'black',
    img: 'https://res.cloudinary.com/dmtq82guq/image/upload/v1700839901/ecommerce-fritz-sport/slider-home/EuTablets_b7rrql.jpg',
    url: '#',
  },
]
export default function CarouselHome() {
  // console.log(data.attributes.SliderDesktop.data);
  const [indiceSlider, setIndiceSlider] = useState(0)
  useEffect(() => {}, [indiceSlider])
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 950 })
  const isTablet = useMediaQuery({ maxWidth: 950, minWidth: 600 })

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
                {sliderDesktop.map((el, i) => (
                  <div key={i}>
                    <div className="">
                      <img className="z-dev" src={el.img} alt="" />
                      <div className="relative text-2xl text-black flex justify-start 2xl:ml-80 ml-20 items-center top-24 bottom-0 w-full h-full z-50">
                        <div className="absolute flex flex-col items-center justify-start  text w-auto bottom-[calc(45vh)]">
                          <h6
                            className={`text-center text-4xl font-black  text-${el.color}`}
                          >
                            {' '}
                            {el.title}
                          </h6>
                          <p
                            className={`text-center mt-1  text-${el.color} text-lg`}
                          >
                            {el.desc}
                          </p>
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
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
              <div className="flex w-full mt-5 ">
                {sliderDesktop.map((el, i) => (
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
                {sliderTablet.map((el, i) => (
                  <div key={i} className="mt-12">
                    <div className="">
                      <img className="z-dev" src={el.img} alt="" />
                      <div className="relative text-2xl text-black flex justify-center top-0 bottom-0 w-full h-full z-50">
                        <div className="absolute flex flex-col items-center justify-center  text w-auto bottom-[calc(25vw)]">
                          <h6
                            className={`text-center text-xl font-black text-${el.color}`}
                          >
                            {' '}
                            {el.title}
                          </h6>
                          <p
                            className={`text-center text-${el.color} text-base`}
                          >
                            {el.desc}
                          </p>
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
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>

              <div className="flex w-full mt-0">
                {sliderMobil.map((el, i) => (
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
              {sliderMobil.map((el, i) => (
                <div key={i} className="mt-12">
                  <div className="">
                    <img className="z-dev" src={el.img} alt="" />
                    <div className="relative text-2xl text-black flex justify-center top-0 bottom-0 w-full h-full z-50">
                      <div className="absolute flex flex-col items-center justify-center  text w-auto bottom-[calc(25vw)]">
                        <h6
                          className={`text-center text-xl font-black text-${el.color}`}
                        >
                          {' '}
                          {el.title}
                        </h6>
                        <p className={`text-center text-${el.color} text-base`}>
                          {el.desc}
                        </p>
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
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
            <div className="flex w-full mt-0">
              {sliderMobil.map((el, i) => (
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
