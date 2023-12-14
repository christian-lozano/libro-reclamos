import React from 'react'

import { Button } from '../@ui/button/button'
import { Link } from '../@ui/link/link'

const DataCardBg = [
  {
    url: '/mujer',
    button: 'Mujer',
    imgCategory:
      'https://res.cloudinary.com/da868wsih/image/upload/v1700864622/fritz-ecommerce/home-body-genero/MUJER_ujgqpj.png',
  },

  {
    url: '/hombre',
    button: 'Hombre',
    imgCategory:
      'https://res.cloudinary.com/da868wsih/image/upload/v1700864291/fritz-ecommerce/home-body-genero/HOMBRE_ujxyb1.png',
  },

  {
    url: '/ninos',
    button: 'Niños',
    imgCategory:
      'https://cdn.sanity.io/images/qa41whrn/prod/39c75b85700442a4b0b1b73d33468b5d99f3b221-1536x1536.jpg?w=2160&q=80&auto=format',
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
