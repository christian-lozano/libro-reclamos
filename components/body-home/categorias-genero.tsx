import React from 'react'

import { Button } from '../@ui/button/button'
import { Link } from '../@ui/link/link'

const DataCardBg = [
  {
    url: '/mujer',
    button: 'Mujer',
    imgCategory: 'static/images/categoria-home/mujer.jpg',
  },

  {
    url: '/hombre',
    button: 'Hombre',
    imgCategory: 'static/images/categoria-home/hombre.jpg',
  },

  {
    url: '/ninos',
    button: 'Niños',
    imgCategory: 'static/images/categoria-home/ninos.jpg',
  },
]

export function CategoriasGenero() {
  return (
    <div className=" flex justify-center w-full h-auto items-center z-20">
      <div className=" flex flex-col items-center justify-center w-full">
        <h2 className="xl:text-3xl text-xl text-center xl:py-10 py-5 font-bold">
          Nuestras Categorías
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-y-10 md:grid-cols-2 justify-items-center items-center gap-x-5 ">
          {DataCardBg.map((el, index) => (
            <Link
              key={index}
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
