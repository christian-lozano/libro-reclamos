import { Button } from '@material-tailwind/react'
import React from 'react'

import type { SearchPageLayoutProps } from '@/layouts/search-page-layout'
import {
  SearchPageLayout,
  getStaticPropsPage,
} from '@/layouts/search-page-layout'

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
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div className="p-0 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
                <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                  <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img
                      src="https://lh5.googleusercontent.com/p/AF1QipP00B6BVcTH365JsWbmsBhfDCcgETXzfvQnqxUj=s516-k-no"
                      alt="ui/ux review check"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="block text-center font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                      Miguel Graú
                    </h4>
                    <p className="mt-3 block font-sans  text-center  font-normal leading-relaxed text-gray-700 antialiased">
                      Fritz Sport, Av. Miguel Grau 231, Lima 15001
                    </p>
                  </div>
                  <div className="flex items-center justify-between p-6">
                    <div className="w-full flex justify-around">
                      {/* <img
                        alt="natali craig"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
                        data-tooltip-target="author-1"
                      />
                      <img
                        alt="tania andrew"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                        className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
                        data-tooltip-target="author-2"
                      /> */}

                      <Button>Ver Horarios</Button>
                      <Button>Ubicación</Button>
                    </div>
                    {/* <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                      <svg
                        width="40px"
                        height="40px"
                        viewBox="-55.5 0 367 367"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid"
                        fill="#000000"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {' '}
                          <g>
                            {' '}
                            <path
                              d="M70.5853976,271.865254 C81.1995596,285.391378 90.8598594,299.639537 99.4963338,314.50654 C106.870174,328.489419 109.94381,337.97007 115.333495,354.817346 C118.638014,364.124835 121.625069,366.902652 128.046515,366.902652 C135.045169,366.902652 138.219816,362.176756 140.672953,354.867852 C145.766819,338.95854 149.763988,326.815514 156.069992,315.343493 C168.443902,293.193112 183.819296,273.510299 198.927732,254.592287 C203.018698,249.238677 229.462067,218.047767 241.366994,193.437035 C241.366994,193.437035 255.999233,166.402027 255.999233,128.645368 C255.999233,93.3274168 241.569017,68.8321265 241.569017,68.8321265 L200.024428,79.9578224 L174.793197,146.408963 L168.552129,155.57215 L167.303915,157.231625 L165.64444,159.309576 L162.729537,162.628525 L158.56642,166.791642 L136.098575,185.09637 L79.928962,217.528279 L70.5853976,271.865254 Z"
                              fill="#34A853"
                            >
                              {' '}
                            </path>{' '}
                            <path
                              d="M12.6120081,188.891517 C26.3207125,220.205084 52.7568668,247.730719 70.6431185,271.8869 L165.64444,159.352866 C165.64444,159.352866 152.260416,176.856717 127.981579,176.856717 C100.939355,176.856717 79.0920095,155.2619 79.0920095,128.032084 C79.0920095,109.359386 90.325932,96.5309245 90.325932,96.5309245 L25.8373003,113.811107 L12.6120081,188.891517 Z"
                              fill="#FBBC04"
                            >
                              {' '}
                            </path>{' '}
                            <path
                              d="M166.705061,5.78651629 C198.256727,15.959818 225.262874,37.3165365 241.597878,68.8104812 L165.673301,159.28793 C165.673301,159.28793 176.907223,146.228586 176.907223,127.671329 C176.907223,99.8065834 153.443693,78.990998 128.09702,78.990998 C104.128433,78.990998 90.3620076,96.4659886 90.3620076,96.4659886 L90.3620076,39.4666386 L166.705061,5.78651629 Z"
                              fill="#4285F4"
                            >
                              {' '}
                            </path>{' '}
                            <path
                              d="M30.0148476,45.7654275 C48.8607087,23.2182162 82.0213432,0 127.736265,0 C149.915506,0 166.625695,5.82259183 166.625695,5.82259183 L90.2898565,96.5164943 L36.2054099,96.5164943 L30.0148476,45.7654275 Z"
                              fill="#1A73E8"
                            >
                              {' '}
                            </path>{' '}
                            <path
                              d="M12.6120081,188.891517 C12.6120081,188.891517 0,164.194204 0,128.414485 C0,94.5972757 13.145926,65.0369799 30.0148476,45.7654275 L90.3331471,96.5237094 L12.6120081,188.891517 Z"
                              fill="#EA4335"
                            >
                              {' '}
                            </path>{' '}
                          </g>{' '}
                        </g>
                      </svg>
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SearchPageLayout>
  )
}

export const getStaticProps = () => getStaticPropsPage(Home)
