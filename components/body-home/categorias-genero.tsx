import React from 'react'

import { Link } from '../@ui/link/link'

const DataCardBg = [
  {
    url: '/mujer',
    button: 'Mujer',
    imgCategory:
      'https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/~regional~EEA~others~KOPs~AW23~SEASONAL~CATEGORIES+SEPT~HOMEPAGE~EEA_AW23_TrendingInlineTile-homepage-woman_2000x2000.jpg/fmt/jpg/fmt/png',
  },

  {
    url: '/hombre',
    button: 'Hombre',
    imgCategory:
      'https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/~regional~EEA~others~KOPs~AW23~SEASONAL~CATEGORIES+SEPT~HOMEPAGE~EEA_AW23_TrendingInlineTile-homepage_Man_2000x2000.jpg/fmt/jpg/fmt/png',
  },

  {
    url: '/ninos',
    button: 'Niños',
    imgCategory:
      'https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/~regional~EEA~others~KOPs~AW23~SEASONAL~CATEGORIES+SEPT~HOMEPAGE~EEA_AW23_TrendingInlineTile-homepage-_kid_2000x2000.jpg/fmt/jpg/fmt/png',
  },
]

export function CategoriasGenero() {
  return (
    <div className=" flex justify-center w-full h-auto items-center z-20">
      <div className=" flex flex-col items-center justify-center w-full">
        <h2 className="xl:text-3xl text-xl text-center xl:py-10 py-5 font-bold">
          Nuestras Categorías
        </h2>
        <div className="grid grid-cols-1  lg:grid-cols-1 laptop:grid-cols-3 gap-y-10 md:grid-cols-2 justify-items-center items-center gap-x-5 ">
          {DataCardBg.map((el, index) => (
            <Link
              key={index}
              href={el.url}
              className="  laptop:rounded-xl laptop:rounded-xl laptop:rounded-xl text-center"
            >
              <img src={el.imgCategory} alt="" />
              <div className="flex justify-center w-full">
                <span className="my-3 uppercase text-white bg-black p-3  w-3/5 md:p-2 font-bold  text-sm laptop:text-base ">
                  {el.button}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
