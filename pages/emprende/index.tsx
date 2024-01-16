import React from 'react'

import PaginaEmprende from '@/components/pagina/PaginaEmprende'
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
      <PaginaEmprende props={props} />
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
  const resPasosList = await fetch(
    'https://www.fritzsport.pe/api/emprende/pasosList'
  )
  // emprendedor
  const resEmprendedorCard = await fetch(
    'https://www.fritzsport.pe/api/emprende/iniciaEmprende/emprendedor/imageCardEmprendedor'
  )
  const reslistTipoEmprendedorBeneficios = await fetch(
    'https://www.fritzsport.pe/api/emprende/iniciaEmprende/emprendedor/listTipoEmprendedorBeneficios'
  )
  const reslistTipoEmprendedorRequisitos = await fetch(
    'https://www.fritzsport.pe/api/emprende/iniciaEmprende/emprendedor/listTipoEmprendedorRequisitos'
  )
  // Mayorista
  const resMayoristaCard = await fetch(
    'https://www.fritzsport.pe/api/emprende/iniciaEmprende/mayorista/imageCardMayorista'
  )
  const reslistTipoMayoristaBeneficios = await fetch(
    'https://www.fritzsport.pe/api/emprende/iniciaEmprende/mayorista/listTipoMayoristaBeneficios'
  )
  const reslistTipoMayoristaRequisitos = await fetch(
    'https://www.fritzsport.pe/api/emprende/iniciaEmprende/mayorista/listTipoMayoristaRequisitos'
  )
  const PortadaDesktop = await resPortadaDesktop.json()
  const PortadaMobil = await resPortadaMobil.json()
  const BeneficiosGrid = await resBeneficiosGrid.json()
  const ImageCardPasos = await resImageCardPasos.json()
  const PasosList = await resPasosList.json()
  // emprendedor
  const EmprendedorCard = await resEmprendedorCard.json()

  const listTipoEmprendedorBeneficios =
    await reslistTipoEmprendedorBeneficios.json()

  const listTipoEmprendedorRequisitos =
    await reslistTipoEmprendedorRequisitos.json()

  // Mayorista
  const MayoristaCard = await resMayoristaCard.json()

  const listTipoMayoristaBeneficios =
    await reslistTipoMayoristaBeneficios.json()

  const listTipoMayoristaRequisitos =
    await reslistTipoMayoristaRequisitos.json()

  getStaticPropsPage(Home)
  return {
    props: {
      PortadaDesktop,
      PortadaMobil,
      BeneficiosGrid,
      ImageCardPasos,
      PasosList,
      EmprendedorCard,
      listTipoEmprendedorBeneficios,
      listTipoEmprendedorRequisitos,
      MayoristaCard,
      listTipoMayoristaBeneficios,
      listTipoMayoristaRequisitos,
    },
    // MujerPortadaDesktop,
    revalidate: 80, // In seconds
  }
}
