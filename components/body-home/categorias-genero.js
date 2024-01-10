import React, { useEffect, useState } from 'react'

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
      'https://res.cloudinary.com/da868wsih/image/upload/v1702661432/fritz-ecommerce/home-body-genero/adadasdasdsad_t2h7ns.jpg',
  },
]



export function CategoriasGenero() {

  const [dataCategorias, setDataCategorias] = useState([])

async function fetchDataCategorias() {
  const request = await fetch('/api/home/homeCategorias')
  const data = await request.json()
  setDataCategorias(data)
}
useEffect(() => {
  fetchDataCategorias()
}, [])
console.log(dataCategorias);
  return (
    <div className=" flex justify-center w-full h-auto items-center z-20">
      <div className=" flex flex-col items-center justify-center w-full">
        <h2 className="xl:text-3xl text-xl text-center xl:py-10 py-5 font-bold">
          Nuestras Categorías
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-y-10 md:grid-cols-2 justify-items-center items-center gap-x-5 ">
          {dataCategorias.map((el) => (
            <Link
              key={el._id}
              href={el.button_url}
              className="laptop:rounded-xl  text-center"
            >
              <img src={el.secure_url} alt="" />
              <div className="flex justify-center w-full">
                <Button
                  className={`bg-black flex justify-around items-center laptop:text-lg  text-sm  font-medium border border-black shadow-lg text-black mt-5  py-1 px-3 rounded-sm uppercase`}
                >
                  <span className="mr-1 text-white"> {el.button_title}</span>
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
