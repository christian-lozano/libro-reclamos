import Carousel from 'nuka-carousel'
import React, { useEffect, useState } from 'react'

import { Link } from '../@ui/link/link'

export function CarouselMarcasHome({ props }) {
  // console.log(props);

  const [indiceSlider, setIndiceSlider] = useState(0)

  if (!props.homeSliderMarcas) return <div>Cargando</div>

  return (
    <div className="my-8 ">
      <h4 className=" my-5 text-center">Nuestras Marcas</h4>
      <div className="hidden laptop:block">
        <div className="grid grid-flow-col-dense w-full  my-10 justify-items-center">
          <Link
            href="/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5Bbrand%5D%5B0%5D=Adidas"
            className="border-indigo-600"
          >
            <div className="h-24 w-24 flex items-center  border ">
              <img
                src="https://res.cloudinary.com/dmtq82guq/image/upload/v1710780236/fritz_sport/Adidas_Logo_1_pqilud.jpg"
                alt=""
              />
            </div>
          </Link>
          <Link
            href="/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5Bbrand%5D%5B0%5D=Nike"
            className="border-indigo-600"
          >
            <div className="h-24 w-24 flex items-center  border ">
              <img
                src="https://res.cloudinary.com/dmtq82guq/image/upload/v1710780259/fritz_sport/logo_nike_principal_fsc80c.jpg"
                alt=""
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="laptop:hidden">
        <Carousel
          autoplay={true}
          autoplayInterval={10000}
          wrapAround={true}
          withoutControls={true}
          adaptiveHeight={true}
          // zoomScale={1}
          slidesToShow={3}
          enableKeyboardControls={true}
          // speed={100}
          // slideIndex={indiceSlider}
          // dragThreshold={1}
          afterSlide={(i) => setIndiceSlider(i)}
          // slideCount={indiceSlider}
        >
          <Link
            href="/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5Bbrand%5D%5B0%5D=Adidas"
            className="border-indigo-600"
          >
            <div className="h-24 w-24 flex items-center  border ">
              <img
                src="https://res.cloudinary.com/dmtq82guq/image/upload/v1710780236/fritz_sport/Adidas_Logo_1_pqilud.jpg"
                alt=""
              />
            </div>
          </Link>
          <Link
            href="/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5Bbrand%5D%5B0%5D=Nike"
            className="border-indigo-600"
          >
            <div className="h-24 w-24 flex items-center  border ">
              <img
                src="https://res.cloudinary.com/dmtq82guq/image/upload/v1710780259/fritz_sport/logo_nike_principal_fsc80c.jpg"
                alt=""
              />
            </div>
          </Link>
        </Carousel>
        {/* <div className="flex w-full mt-5 ">
          {props.homeSliderMarcas.map((el, i) => (
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
        </div> */}
      </div>
    </div>
  )
}
