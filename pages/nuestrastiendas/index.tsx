import { Button } from '@material-tailwind/react'
import React from 'react'

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
  },
]

export default function Home(props: SearchPageLayoutProps) {
  return (
    <SearchPageLayout {...props}>
      <div className=" pt-14 md:pt-16">
        <section className="blog text-gray-700 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                {' '}
                Blog
              </h1>
              <p className="lg:w-1/2 w-full leading-relaxed text-base">
                J'aime bien partager mes connaissances et des recherche
                intéressantes, pour le faire j'ai mis en place un blog
                personnel. Nous abordons plusieurs sujets intéressants et je
                donne quelques astuces et conseils aux jeunes développeurs pour
                mieux s'en sortir.{' '}
              </p>
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
                          nonce={undefined}
                          onResize={undefined}
                          onResizeCapture={undefined}
                        >
                          Ver Horarios
                        </Button>
                        <Button
                          nonce={undefined}
                          onResize={undefined}
                          onResizeCapture={undefined}
                        >
                          Ubicación
                        </Button>
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
