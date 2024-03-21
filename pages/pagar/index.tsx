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
      <HeaderNew activeSearchGlobal={false} props={props} />
      <PaginaPagar />
    </SearchPageLayout>
  )
}

