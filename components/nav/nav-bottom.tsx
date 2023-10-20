import MenuIcon from '@material-design-icons/svg/outlined/menu.svg'
import { useRouter } from 'next/router'
import React, { useMemo, useState } from 'react'

import { Laptop, Tablet } from '@/lib/media'
import { parseUrl } from '@/utils/parseUrl'
import { Button } from '@ui/button/button'
import { IconLabel } from '@ui/icon-label/icon-label'

import MultilevelSidebar from '../multilevel-sidebar/multilevel-sidebar.component'
import options from '../multilevel-sidebar/multilevel-sidebar.data'

import { NavAutocomplete } from './nav-autocomplete'
import { NavItem } from './nav-item'

export function NavBottom() {
  const router = useRouter()
  const currentCategory = useMemo(() => {
    const { pathname } = parseUrl(router?.asPath)
    return pathname.match(/\/catalog\/(.[^/]*)\/?/)?.[1]
  }, [router?.asPath])

  // menu useState

  const genderSubCategories = (
    <>
      {currentCategory === 'Women' && (
        <NavItem label="Bags" href={`/catalog/${currentCategory}/Bags`} />
      )}
      <NavItem label="Clothing" href={`/catalog/${currentCategory}/Clothing`} />
      <NavItem label="Shoes" href={`/catalog/${currentCategory}/Shoes`} />
    </>
  )

  const accessoriesSubCategories = (
    <>
      <NavItem label="Clothing" href={`/catalog/${currentCategory}/Men`} />
      <NavItem label="Shoes" href={`/catalog/${currentCategory}/Women`} />
    </>
  )
  const [open, setOpen] = useState(false)
  const handleSidebarToggle = (isOpen: boolean) => {
    setOpen(isOpen)
  }
  return (
    <div className="flex items-center px-4 relative divide-x border-b border-neutral-light laptop:h-12 laptop:mx-20 laptop:mb-5 laptop:px-0 laptop:justify-between laptop:border-none laptop:divide-none">
      <Tablet>
        <Button
          className="p-3 pl-0 2xl:hidden xl:hidden"
          onClick={() => handleSidebarToggle(true)}
        >
          <IconLabel icon={MenuIcon} label="Menu" labelPosition="right" />
        </Button>
      </Tablet>
      {/* mobile   menu*/}
      <MultilevelSidebar
        open={open}
        options={options}
        header="Fritz Sport"
        onToggle={handleSidebarToggle}
      />
      <Laptop>
        {currentCategory && (
          <nav>
            <ul className="flex gap-6 small-uppercase">
              {currentCategory === 'Accessories'
                ? accessoriesSubCategories
                : genderSubCategories}
            </ul>
          </nav>
        )}
      </Laptop>

      <NavAutocomplete />
    </div>
  )
}
