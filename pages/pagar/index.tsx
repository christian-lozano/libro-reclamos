import { HeaderNew } from '@/components/header/header-new'
import PaginaPagar from '@/components/pagina/PaginaPagar'
import type { SearchPageLayoutProps } from '@/layouts/search-page-layout'
import {
  SearchPageLayout,
  getStaticPropsPage,
} from '@/layouts/search-page-layout'

export default function Home(props: SearchPageLayoutProps) {
  return (
    <SearchPageLayout {...props}>
      <HeaderNew props={props} />
      <PaginaPagar />
    </SearchPageLayout>
  )
}
export const getStaticProps = async () => {

  const resNav = await fetch('https://www.fritzsport.pe/api/home/nav')
  const resLogo = await fetch('https://www.fritzsport.pe/api/home/logo')
  const homeNav = await resNav.json()
  const homeLogo = await resLogo.json()


  getStaticPropsPage(Home)
  return {
    props: {
      homeNav,
      homeLogo
    },
    // MujerPortadaDesktop,
    revalidate: 80, // In seconds
  }
}
