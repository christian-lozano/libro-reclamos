import React, { useState, useEffect } from 'react'

import ReduceStock from '@/components/reduce-stock/reduce-stock'
import type { SearchPageLayoutProps } from '@/layouts/search-page-layout'
import {
  SearchPageLayout,
  getStaticPropsPage,
} from '@/layouts/search-page-layout'

export default function Home(props: SearchPageLayoutProps) {
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  return (
    <SearchPageLayout {...props}>
      <div className="py-16">
        <ReduceStock />
      </div>
    </SearchPageLayout>
  )
}

export const getStaticProps = () => getStaticPropsPage(Home)
