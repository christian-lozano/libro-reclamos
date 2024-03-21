import NotFound from '@/components/404/notFound'
import { HeaderNew } from '@/components/header/header-new'
import type { SearchPageLayoutProps } from '@/layouts/search-page-layout'
import { SearchPageLayout } from '@/layouts/search-page-layout'

export default function Home(props: SearchPageLayoutProps) {
  return (
    <SearchPageLayout {...props}>
      <HeaderNew activeSearchGlobal={false} props={props} />
      <NotFound />
    </SearchPageLayout>
  )
}
