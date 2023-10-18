import React from 'react'

import { Link } from '../@ui/link/link'

const imgSection = {
  imgMd:
    'https://cdn.sanity.io/images/qa41whrn/prod/ee9f2445f6812ee263c1972d8a03f37d1078ad9d-1536x1536.jpg?w=720&q=80&auto=format',
  imgXl:
    'https://cdn.sanity.io/images/qa41whrn/prod/45b67822ba8ef9f1be6d5ed0c0937592fbbc2e0d-1440x500.jpg?w=2160&q=80&auto=format',
}
export function BannerPromociones() {
  return (
    <div className="  flex items-center">
      <section
        className={`w-full bg-cover bg-center py-8 pb-14 2xl:py-40 xl:py-40 lg:py-30 md:py-20`}
      >
        <div className=" w-full text-center text-white relative">
          <img
            src={imgSection.imgXl}
            className="w-full h-full hidden md:hidden  lg:block laptop:block 2xl:block"
            alt=""
          />
          <img
            src={imgSection.imgMd}
            className="w-full h-full block md:block laptop:hidden laptop:hidden laptop:hidden"
            alt=""
          />
          {/* desktop */}
          <div className="absolute top-0 w-full h-full  hidden md:hidden  laptop:block xl:block 2xl:block">
            <div className="container h-full w-full flex-col  flex justify-center items-end pl-20">
              <div className="w-3/5 md:w-3/5 2xl:w-full flex flex-col items-start ">
                <div className="w-full ">
                  <h1 className="xl:text-4xl md:text-3xl 2xl:text-6xl font-bold text-left py-5 ">
                    Nuevos Ingresos
                  </h1>
                </div>
                <div className="w-full flex justify-start  ">
                  <div className="flex justify-around ">
                    <Link href="/mujer">
                      <span className="text-black bg-white p-3  md:p-2 font-bold mr-6  text-sm 2xl:text-base">
                        Tienda Hombre
                      </span>
                    </Link>

                    <Link href="/hombre">
                      <span className="text-black bg-white p-3  md:p-2 font-bold mr-6  text-sm 2xl:text-base">
                        Tienda Mujer
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* mobil */}
          <div className=" top-0 w-full h-full  md:block laptop:hidden xl:hidden 2xl:hidden">
            <div className=" h-full w-full flex-col  flex justify-center items-center ">
              <div className="w-full flex flex-col items-center ">
                <div className=" ">
                  <h1 className="xl:text-4xl text-black text-xl md:text-3xl 2xl:text-6xl font-bold text-left py-5 ">
                    FOREVER. CLASSIC.
                  </h1>
                </div>
                <div className="w-full flex justify-center  ">
                  <div className="flex justify-around w-full">
                    <Link href="#">
                      <span className="text-white bg-black p-3 font-sans md:p-2 font-medium md:px-5 md:py-3   mr-6  text-sm 2xl:text-base">
                        TIENDA HOMBRE
                      </span>
                    </Link>
                    <Link href="#">
                      <span className="text-white bg-black p-3 font-sans md:p-2 font-medium md:px-5 md:py-3   mr-6 text-sm 2xl:text-base ">
                        TIENDA MUJER
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
