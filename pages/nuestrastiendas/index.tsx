import { Dialog, DialogHeader, DialogBody } from '@material-tailwind/react'
import React from 'react'

import { Button } from '@/components/@ui/button/button'
import type { SearchPageLayoutProps } from '@/layouts/search-page-layout'
import {
  SearchPageLayout,
  getStaticPropsPage,
} from '@/layouts/search-page-layout'

const dataNuestrasEmpresas = [
  {
    img: 'https://lh5.googleusercontent.com/p/AF1QipP00B6BVcTH365JsWbmsBhfDCcgETXzfvQnqxUj=s516-k-no',
    title: 'Miguel Graú ',
    subtitle: 'Fritz Sport, Av. Miguel Grau 231, Lima 15001',
    dataHorarios: [
      ' Lunes de 09:00 am a 09:00 pm',
      ' Martes de 09:00 am a 09:00 pm',
      ' Miércoles de 09:00 am a 09:00 pm',
      ' Jueves de 09:00 am a 09:00 pm',
      ' Viernes de 09:00 am a 09:00 pm',
      ' Sábado de 09:00 am a 09:00 pm',
      ' Domingo de 09:00 am a 09:00 pm',
    ],
    ubicacion: 'https://maps.app.goo.gl/h54ryBi9SqHQkQUW6',
  },

  {
    img: 'https://lh5.googleusercontent.com/p/AF1QipP00B6BVcTH365JsWbmsBhfDCcgETXzfvQnqxUj=s516-k-no',
    title: 'Tumbes ',
    subtitle: 'Av. República del Perú 373, 24101',
    dataHorarios: [
      ' Lunes de 09:00 am a 07:00 pm',
      ' Martes de 09:00 am a 07:00 pm',
      ' Miércoles de 09:00 am a 07:00 pm',
      ' Jueves de 09:00 am a 07:00 pm',
      ' Viernes de 09:00 am a 07:00 pm',
      ' Sábado de 09:00 am a 07:00 pm',
      ' Domingo de 09:00 am a 07:00 pm',
    ],
    ubicacion: 'https://maps.app.goo.gl/iUxXwFKqF2BAEGhC7',
  },
]
export default function Home(props: SearchPageLayoutProps) {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => setOpen(!open)
  return (
    <SearchPageLayout {...props}>
      <div className=" pt-14 md:pt-16">
        <section className="blog text-gray-700 body-font">
          <div className="container px-5  mx-auto">
            <div className="h-2/6 pb-20 bg-gray-50 flex items-center">
              <section className="w-full bg-cover bg-center py-32 bg-[url('https://source.unsplash.com/random')]">
                <div className="container mx-auto text-center text-white">
                  <h1 className="text-5xl font-medium mb-6">
                    {' '}
                    Nuestras Tiendas
                  </h1>
                  <p className="text-xl mb-12">
                    Conoce la Ubicación y Nuestros Horarios de Atención
                  </p>
                </div>
              </section>
            </div>
            {/*  */}
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              {dataNuestrasEmpresas.map((el, i) => (
                <div
                  key={i}
                  className="p-0 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto"
                >
                  <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                      <img src={el.img} alt="ui/ux review check" />
                    </div>
                    <div className="p-6">
                      <h4 className="block text-center font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {el.title}
                      </h4>
                      <p className="mt-3 block font-sans  text-center  font-normal leading-relaxed text-gray-700 antialiased">
                        {el.subtitle}
                      </p>
                    </div>
                    <div className="flex items-center justify-between p-6">
                      <div className="w-full flex justify-around">
                        <Button
                          className="bg-black text-white px-5 py-2 rounded-lg"
                          onClick={handleOpen}
                        >
                          Ver Horarios
                        </Button>
                        <a
                          href={el.ubicacion}
                          className="bg-black text-white px-5 py-2 rounded-lg"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Ver Ubicación
                        </a>

                        <Dialog
                          className="relative"
                          open={open}
                          handler={handleOpen}
                          nonce={undefined}
                          onResize={undefined}
                          onResizeCapture={undefined}
                        >
                          <Button
                            className="absolute top-1 right-1"
                            onClick={handleOpen}
                          >
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </span>
                          </Button>
                          <DialogHeader
                            className="text-center  flex justify-center"
                            nonce={undefined}
                            onResize={undefined}
                            onResizeCapture={undefined}
                          >
                            <div>Horarios de Atención</div>
                          </DialogHeader>

                          <DialogBody
                            className=""
                            nonce={undefined}
                            onResize={undefined}
                            onResizeCapture={undefined}
                          >
                            {' '}
                            <div className="w-full flex flex-col  items-center justify-center">
                              {el.dataHorarios.map((elment, i) => (
                                <div
                                  key={i}
                                  className="my-2 w-full  border-b-2 text-center"
                                >
                                  {elment}
                                </div>
                              ))}
                            </div>
                          </DialogBody>
                        </Dialog>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </SearchPageLayout>
  )
}

export const getStaticProps = () => getStaticPropsPage(Home)
