import Carousel from 'nuka-carousel'
import { useState, useEffect } from 'react'

const sliderDesktop = [
  'https://street47.vtexassets.com/assets/vtex.file-manager-graphql/images/c8d2856e-c08c-49b7-8d0d-e4813a45e413___edd9a1d5c3a220fb4f867aab63fff4da.jpg',
  'https://street47.vtexassets.com/assets/vtex.file-manager-graphql/images/c8d2856e-c08c-49b7-8d0d-e4813a45e413___edd9a1d5c3a220fb4f867aab63fff4da.jpg',
  'https://street47.vtexassets.com/assets/vtex.file-manager-graphql/images/c8d2856e-c08c-49b7-8d0d-e4813a45e413___edd9a1d5c3a220fb4f867aab63fff4da.jpg',
  'https://street47.vtexassets.com/assets/vtex.file-manager-graphql/images/c8d2856e-c08c-49b7-8d0d-e4813a45e413___edd9a1d5c3a220fb4f867aab63fff4da.jpg',
  'https://street47.vtexassets.com/assets/vtex.file-manager-graphql/images/c8d2856e-c08c-49b7-8d0d-e4813a45e413___edd9a1d5c3a220fb4f867aab63fff4da.jpg',
]
const sliderMobil = [
  'https://street47.vtexassets.com/assets/vtex.file-manager-graphql/images/d3346c84-40fc-4651-9b5c-e369b955b0f7___0bbf3a1b72a4fe8956e12eee38fc556a.jpg',

  'https://street47.vtexassets.com/assets/vtex.file-manager-graphql/images/d3346c84-40fc-4651-9b5c-e369b955b0f7___0bbf3a1b72a4fe8956e12eee38fc556a.jpg',
  'https://street47.vtexassets.com/assets/vtex.file-manager-graphql/images/d3346c84-40fc-4651-9b5c-e369b955b0f7___0bbf3a1b72a4fe8956e12eee38fc556a.jpg',
  'https://street47.vtexassets.com/assets/vtex.file-manager-graphql/images/d3346c84-40fc-4651-9b5c-e369b955b0f7___0bbf3a1b72a4fe8956e12eee38fc556a.jpg',
]
export default function CarouselHome() {
  // console.log(data.attributes.SliderDesktop.data);
  const [indiceSlider, setIndiceSlider] = useState(0)
  useEffect(() => {}, [indiceSlider])

  return (
    <div>
      <div className="block xl:hidden">
        <Carousel
          // autoplay={true}
          autoplay={true}
          autoplayInterval={10000}
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
            <img src={el} key={i} alt="" />
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
      {/* desktop */}
      <div className="hidden xl:block">
        <Carousel
          autoplay={true}
          autoplayInterval={10000}
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
            <img src={el} key={i} alt="" />
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
    </div>
  )
}
