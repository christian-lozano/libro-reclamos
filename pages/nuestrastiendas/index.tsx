import PaginaNuestrasTiendas from '@/components/pagina/PaginaNuestrasTiendas'
import type { SearchPageLayoutProps } from '@/layouts/search-page-layout'
import { SearchPageLayout } from '@/layouts/search-page-layout'

export default function Home(props: SearchPageLayoutProps) {
  return (
    <SearchPageLayout {...props}>
      <PaginaNuestrasTiendas props={props} />
    </SearchPageLayout>
  )
}
