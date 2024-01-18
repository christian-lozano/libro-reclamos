import PaginaNuestrasTiendas from '@/components/pagina/PaginaNuestrasTiendas'
import type { SearchPageLayoutProps } from '@/layouts/search-page-layout'
import {
  SearchPageLayout,
  getStaticPropsPage,
} from '@/layouts/search-page-layout'

export default function Home(props: SearchPageLayoutProps) {
  return (
    <SearchPageLayout {...props}>
      <PaginaNuestrasTiendas props={props} />
    </SearchPageLayout>
  )
}

export const getStaticProps = async () => {
  const resPortadaDesktop = await fetch(
    'https://www.fritzsport.pe/api/nuestrasTiendas/videoUrlDesktop'
  )

  const resPortadaMobil = await fetch(
    'https://www.fritzsport.pe/api/nuestrasTiendas/videoUrlMobil'
  )
  // tienda Grau
  const resTiendaGrauHorarios = await fetch(
    'https://www.fritzsport.pe/api/nuestrasTiendas/tiendaGrau/horarios'
  )
  const resTiendaGrauImageCard = await fetch(
    'https://www.fritzsport.pe/api/nuestrasTiendas/tiendaGrau/imageCard'
  )
  const resTiendaGrauUbicacion = await fetch(
    'https://www.fritzsport.pe/api/nuestrasTiendas/tiendaGrau/ubicacion'
  )
  // tienda Tumbes
  const resTiendaTumbesHorarios = await fetch(
    'https://www.fritzsport.pe/api/nuestrasTiendas/tiendaTumbes/horarios'
  )
  const resTiendaTumbesImageCard = await fetch(
    'https://www.fritzsport.pe/api/nuestrasTiendas/tiendaTumbes/imageCard'
  )
  const resTiendaTumbesUbicacion = await fetch(
    'https://www.fritzsport.pe/api/nuestrasTiendas/tiendaTumbes/ubicacion'
  )
  const resNav = await fetch('https://www.fritzsport.pe/api/home/nav')
  const resLogo = await fetch('https://www.fritzsport.pe/api/home/logo')
  const homeNav = await resNav.json()
  const homeLogo = await resLogo.json()
  const PortadaDesktop = await resPortadaDesktop.json()
  const PortadaMobil = await resPortadaMobil.json()

  const TiendaGrauHorarios = await resTiendaGrauHorarios.json()
  const TiendaGrauImageCard = await resTiendaGrauImageCard.json()
  const TiendaGrauUbicacion = await resTiendaGrauUbicacion.json()

  const TiendaTumbesHorarios = await resTiendaTumbesHorarios.json()
  const TiendaTumbesImageCard = await resTiendaTumbesImageCard.json()
  const TiendaTumbesUbicacion = await resTiendaTumbesUbicacion.json()

  getStaticPropsPage(Home)
  return {
    props: {
      homeNav,
      homeLogo,
      PortadaDesktop,
      PortadaMobil,
      TiendaGrauHorarios,
      TiendaGrauImageCard,
      TiendaGrauUbicacion,
      TiendaTumbesHorarios,
      TiendaTumbesImageCard,
      TiendaTumbesUbicacion,
    },
    // MujerPortadaDesktop,
    revalidate: 80, // In seconds
  }
}
