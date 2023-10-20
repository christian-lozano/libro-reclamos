import React, { useState } from 'react'

import { Button } from '@/components/@ui/button/button'
import MultilevelSidebar from '@/components/multilevel-sidebar/multilevel-sidebar.component'
import options from '@/components/multilevel-sidebar/multilevel-sidebar.data'
import type { SearchPageLayoutProps } from '@/layouts/search-page-layout'
import {
  SearchPageLayout,
  getStaticPropsPage,
} from '@/layouts/search-page-layout'

export default function Home(props: SearchPageLayoutProps) {
  const [open, setOpen] = useState(false)

  const handleSidebarToggle = (isOpen: boolean) => {
    setOpen(isOpen)
  }

  return (
    <SearchPageLayout {...props}>
      <div className="  py-16">
        <MultilevelSidebar
          open={open}
          options={options}
          header="React-MultiLevel-Sidebar"
          onToggle={handleSidebarToggle}
        />
        <div>
          <Button onClick={() => handleSidebarToggle(true)}>Open</Button>
        </div>
      </div>
    </SearchPageLayout>
  )
}

export const getStaticProps = () => getStaticPropsPage(Home)
