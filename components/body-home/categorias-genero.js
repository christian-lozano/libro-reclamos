import React, { useEffect, useState } from 'react'

import { Button } from '../@ui/button/button'
import { Link } from '../@ui/link/link'

const DataCardBg = [
  {
    url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Mujer',
    button: 'Mujer',
    imgCategory:
      'https://res.cloudinary.com/dmtq82guq/image/upload/v1710778375/fritz_sport/mujer-web_fotu3b.jpg',
  },

  {
    url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Hombre&pwa_ecom_ui_template_products%5Bpage%5D=2',
    button: 'Hombre',
    imgCategory:
      'https://res.cloudinary.com/dmtq82guq/image/upload/v1710778380/fritz_sport/hombre-web_f376dl.jpg',
  },

  {
    url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Niños',
    button: 'Niños',
    imgCategory:
      'https://res.cloudinary.com/dmtq82guq/image/upload/v1710778378/fritz_sport/nino-web_u2m3bt.jpg',
  },
]

export function CategoriasGenero({ props }) {
  const [dataCategorias, setDataCategorias] = useState([])

  async function fetchDataCategorias() {
    const request = await fetch('/api/home/homeCategorias')
    const data = await request.json()
    setDataCategorias(data)
  }
  useEffect(() => {
    fetchDataCategorias()
  }, [])
  if (!props.homeCategorias) return <div>Cargando</div>
  return (
    <div className=" flex justify-center w-full h-auto items-center z-20">
      <div className=" flex flex-col items-center justify-center w-full">
        <h2 className="xl:text-3xl text-xl text-center xl:py-10 py-5 font-bold">
          Nuestras Categorías
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-y-10 md:grid-cols-2 justify-items-center items-center gap-x-5 ">
          {DataCardBg.map((el, i) => (
            <Link
              key={i}
              href={el.url}
              className="laptop:rounded-xl  text-center"
            >
              <img src={el.imgCategory} alt="" />
              <div className="flex justify-center w-full">
                <Button
                  className={`bg-black flex justify-around items-center laptop:text-lg  text-sm  font-medium border border-black shadow-lg text-black mt-5  py-1 px-3 rounded-sm uppercase`}
                >
                  <span className="mr-1 text-white"> {el.button}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#fff"
                    className="w-4 h-4 laptop:w-5 laptop:h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
