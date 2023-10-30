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
    title: 'NUEVAS BAD BUNNY RESPONSE CL',
    desc: 'Recién llegadas.',
    color: 'black',
    img: '/static/images/imgSliderHome/image3.jpg',
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
]
export default function CarouselHome() {
  // console.log(data.attributes.SliderDesktop.data);
  const [indiceSlider, setIndiceSlider] = useState(0)
  useEffect(() => {}, [indiceSlider])
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  })
  return (
    <div>
      {!isDesktopOrLaptop ? (
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
                  <img className=" z-dev" src={el.img} alt="" />
                  <div className="relative text-2xl text-black flex justify-center top-0 bottom-0 w-full h-full z-50">
                    <div
                      className={`absolute flex flex-col items-center justify-center  text w-auto bottom-[calc(25vw)]  `}
                    >
                      <h6 className={`text-center font-black text-${el.color}`}>
                        {' '}
                        {el.title}
                      </h6>
                      <p className={`text-center text-${el.color} text-base`}>
                        {el.desc}
                      </p>
                      <Button
                        className={`bg-black text-lg text-white mt-5 w-3/6 rounded-lg`}
                      >
                        Comprar
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
      ) : (
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
                <div className="relative">
                  <img className=" z-dev" src={el.img} alt="" />
                  <p className="absolute text-2xl text-black top-20 z-50">
                    {el.title}
                  </p>
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
    </div>
  )
}
