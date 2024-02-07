import classNames from 'classnames'
import { useState } from 'react'

import { Nav } from '@/components/nav/nav'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'


export function HeaderNew({props,activeSearchGlobal}) {
  const [isSticky, setIsSticky] = useState(false)

  const { setObservedNode } = useIntersectionObserver({
    callback: (e) => setIsSticky(e.intersectionRatio < 1),
    threshold: [1],
  })

  return (
    <header
      className={classNames(
        'z-header sticky -top-px pt-px transition-shadow bg-white shadow-none',
        {
          'shadow-none': isSticky,
        }
      )}
      ref={setObservedNode}
    >
      <Nav props={props} activeSearchGlobal={activeSearchGlobal}/>
    </header>
  )
}
