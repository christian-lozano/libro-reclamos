import Link from 'next/link'
import Carousel from 'nuka-carousel'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

import { Button } from '../@ui/button/button'




export default function CarouselHome({props}) {


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
                autoplayInterval={5000}
                wrapAround={true}
                withoutControls={true}
                adaptiveHeight={true}
                zoomScale={1}
                enableKeyboardControls={true}
                // speed={100}
                // slideIndex={indiceSlider}
                // dragThreshold={1}
                afterSlide={(i) => setIndiceSlider(i)}
                // slideCount={0}
              >
                {props.homeSliderDesktop.map((el) => (
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
                          <Link href={el.button_url}>
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
                {props.homeSliderDesktop.map((el, i) => (
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
                {props.homeSliderTablet.map((el, i) => (
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
                          <Link href={el.button_url}>
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
                {props.homeSliderTablet.map((el, i) => (
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
              {props.homeSliderMobil.map((el) => (
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
                        <Link href={el.button_url}>
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
              {props.homeSliderMobil.map((el, i) => (
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



