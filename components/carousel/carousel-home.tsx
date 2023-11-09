import Carousel from 'nuka-carousel'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

import { Button } from '../@ui/button/button'

const sliderDesktop = [
  {
    title: 'NUEVAS BAD BUNNY RESPONSE CL',
    color: 'white',
    desc: 'Recién llegadas.',
    img: '/static/images/imgSliderHome/image1.jpg',
    url: '#',
  },
  {
    title: 'MARINERUSH PACK',
    color: 'black',
    desc: 'Recién llegadas.',
    img: '/static/images/imgSliderHome/image2.jpg',
    url: '#',
  },
  {
    title: 'PACK CRAZYRUSH',
    desc: 'Recién llegadas.',
    color: 'black',
    img: '/static/images/imgSliderHome/image3.jpg',
    url: '#',
  },
  {
    title: 'NUEVAS BAD BUNNY RESPONSE CL',
    color: 'white',
    desc: 'Recién llegadas.',
    img: '/static/images/imgSliderHome/EuDesktop.jpg',
    url: '#',
  },
]
const sliderMobil = [
  {
    title: 'NUEVAS BAD BUNNY RESPONSE CL',
    color: 'white',
    desc: 'Recién llegadas.',
    img: '/static/images/imgSliderHome/imageMobile1.jpg',
    url: '#',
  },

  {
    title: 'MARINERUSH PACK',
    desc: 'Recién llegadas.',
    color: 'black',
    img: '/static/images/imgSliderHome/imageMobile2.jpg',
    url: '#',
  },
  {
    title: 'PACK CRAZYRUSH',
    desc: 'Recién llegadas.',
    color: 'black',
    img: '/static/images/imgSliderHome/imageMobile3.jpg',
    url: '#',
  },
  {
    title: 'PACK CRAZYRUSH',
    desc: 'Recién llegadas.',
    color: 'black',
    img: '/static/images/imgSliderHome/EuMobile.jpg',
    url: '#',
  },
]

const sliderTablet = [
  {
    title: 'MARINERUSH PACK',
    desc: 'Recién llegadas.',
    color: 'black',
    img: '/static/images/imgSliderHome/EuTablets.jpg',
    url: '#',
  },
]
export default function CarouselHome() {
  // console.log(data.attributes.SliderDesktop.data);
  const [indiceSlider, setIndiceSlider] = useState(0)
  useEffect(() => {}, [indiceSlider])
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 950 })
  const isTablet = useMediaQuery({ maxWidth: 950, minWidth: 600 })
  const isMobile = useMediaQuery({ maxWidth: 600 })

  return (
    <div>
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
                  <div className="relative text-2xl text-black flex justify-start 2xl:ml-36 ml-20 items-center top-0 bottom-0 w-full h-full z-50">
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
                        className={`bg-white flex justify-around text-base font-medium border border-black shadow-lg text-black mt-5 w-60 py-2 px-2 rounded-sm uppercase`}
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
      )}

      {isMobile && (
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
      )}
    </div>
  )
}
