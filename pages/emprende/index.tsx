import React from 'react'

import ContentEmprende from '@/components/emprende/ContentEmprende'
import type { SearchPageLayoutProps } from '@/layouts/search-page-layout'
import {
  SearchPageLayout,
  getStaticPropsPage,
} from '@/layouts/search-page-layout'

export default function Home(props: SearchPageLayoutProps) {
  // const { items, cartTotal } = useCart()

  // const [domLoaded, setDomLoaded] = useState(false)

  // useEffect(() => {
  //   setDomLoaded(true)
  // }, [])

  return (
    <SearchPageLayout {...props}>
      <ContentEmprende props={props} />
    </SearchPageLayout>
  )
}
export const getStaticProps = async () => {
  const resPortadaDesktop = await fetch(
    'https://www.fritzsport.pe/api/emprende/portadaDesktop'
  )

  const resPortadaMobil = await fetch(
    'https://www.fritzsport.pe/api/emprende/portadaMobil'
  )
  const resBeneficiosGrid = await fetch(
    'https://www.fritzsport.pe/api/emprende/beneficiosGrid'
  )
  const resImageCardPasos = await fetch(
    'https://www.fritzsport.pe/api/emprende/imageCardPasos'
  )
  // const resPasosList = await fetch(
  //   'https://www.fritzsport.pe/api/emprende/PasosList'
  // )

  const PortadaDesktop = await resPortadaDesktop.json()
  const PortadaMobil = await resPortadaMobil.json()
  const BeneficiosGrid = await resBeneficiosGrid.json()
  const ImageCardPasos = await resImageCardPasos.json()
  // const PasosList = await resPasosList.json()

  getStaticPropsPage(Home)
  return {
    props: {
      PortadaDesktop,
      PortadaMobil,
      BeneficiosGrid,
      ImageCardPasos,
      // PasosList,
    },
    // MujerPortadaDesktop,
    revalidate: 80, // In seconds
  }
}
