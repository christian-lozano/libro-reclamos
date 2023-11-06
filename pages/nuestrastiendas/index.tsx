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
    img: 'https://lh5.googleusercontent.com/p/AF1QipNc0m8OUrP-oiueHkxwr2q8Rc2Hstqf9rM7uQl5=s450-k-no',
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
    img: 'https://lh5.googleusercontent.com/p/AF1QipMs6zTdg1C_xoBmP2gsXzpMT18dCkjEitH9EIfM=s450-k-no',
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
        <section className="blog text-black body-font mb-20">
          <div className="container px-5  mx-auto">
            <div className="h-2/6 flex items-center">
              <section className="w-full bg-cover bg-center ">
                <div className="relative w-full h-full flex justify-center items-center ">
                  <div className="container mx-auto text-center absolute text-white">
                    <h1 className="xl:text-5xl sm:text-3xl text-3xl font-bold mb-6">
                      {' '}
                      Nuestras Tiendas
                    </h1>
                  </div>
                  <video
                    muted={true}
                    webkit-playsinline={true}
                    playsInline={true}
                    preload="auto"
                    autoPlay={true}
                    loop={true}
                    className="w-[100vw] laptop:h-full  hidden xl:block"
                  >
                    <source
                      src="https://brand.assets.adidas.com/video/upload/if_w_gt_1920,w_1920/fw23_rivalry_launch_hp_mh_d_2c98ca2cf4.mp4"
                      type="video/mp4"
                    />
                    <track
                      src="captions_en.vtt"
                      kind="captions"
                      srcLang="en"
                      label="english_captions"
                    />
                    <track
                      src="captions_es.vtt"
                      kind="captions"
                      srcLang="es"
                      label="spanish_captions"
                    />
                  </video>
                  <video
                    muted={true}
                    webkit-playsinline={true}
                    playsInline={true}
                    preload="auto"
                    autoPlay={true}
                    loop={true}
                    className="w-[100vw] h-full  xl:hidden"
                  >
                    <source
                      src="https://fritz-sport.vercel.app/static/images/video/empresaMobil.mp4 "
                      type="video/mp4"
                    />
                    <track
                      src="captions_en.vtt"
                      kind="captions"
                      srcLang="en"
                      label="english_captions"
                    />
                    <track
                      src="captions_es.vtt"
                      kind="captions"
                      srcLang="es"
                      label="spanish_captions"
                    />
                  </video>
                </div>
              </section>
            </div>
            {/*  */}
            <p className="xl:text-3xl text-xl sm:text-xl  font-semibold text-center my-10 sm:mt-16 xl:mt-20 xl:mb-32">
              Conoce la Ubicación y <br /> Nuestros Horarios de Atención
            </p>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 px-1 sm:px-5">
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
