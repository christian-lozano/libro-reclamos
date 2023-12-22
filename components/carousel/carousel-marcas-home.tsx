import Carousel from 'nuka-carousel'
import React, { useState } from 'react'

import { Link } from '../@ui/link/link'

const marcas = [
  {
    id: '01',
    url: '/catalog?pwa_ecom_ui_template_products%5Bquery%5D=adidas',

    value:
      'https://res.cloudinary.com/da868wsih/image/upload/v1703271868/fritz-ecommerce/slider-marcas/Adidas_Logo.svg_ik9n5j.png',
  },
  {
    id: '02',
    url: '/catalog?pwa_ecom_ui_template_products%5Bquery%5D=nike',

    value:
      'https://www.brandemia.org/wp-content/uploads/2011/09/logo_nike_principal.jpg',
  },
  {
    id: '03',
    url: '/catalog?pwa_ecom_ui_template_products%5Bquery%5D=reebok',
    value: 'https://1000marcas.net/wp-content/uploads/2019/12/logo-Reebok.png',
  },
  {
    id: '04',
    url: '/catalog?pwa_ecom_ui_template_products%5Bquery%5D=fila',
    value: 'https://1000logos.net/wp-content/uploads/2018/12/Fila.jpg',
  },
  {
    id: '05',
    url: '/catalog?pwa_ecom_ui_template_products%5Bquery%5D=cat',
    value: 'https://m.media-amazon.com/images/I/314yTZYu1yL.jpg',
  },
]
export function CarouselMarcasHome() {
  const [indiceSlider, setIndiceSlider] = useState(0)

  return (
    <div className="my-8 ">
      <h4 className=" my-5 text-center">Nuestras Marcas</h4>
      <div className="hidden laptop:block">
        <div className="grid grid-cols-5 w-full  my-10 justify-items-center">
          {marcas.map((el, i) => (
            <Link key={i} href={el.url} className="border-indigo-600">
              <div className="h-24 w-24 flex items-center  border ">
                <img src={el.value} alt="" />
              </div>
            </Link>
          ))}
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
          {marcas.map((el, i) => (
            <Link
              key={i}
              href={el.url}
              className="border-indigo-600 flex justify-center"
            >
              <div className="h-24 w-24 flex items-center justify-center border ">
                <img src={el.value} alt="" />
              </div>
            </Link>
          ))}
        </Carousel>
        <div className="flex w-full mt-5 ">
          {marcas.map((el, i) => (
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
