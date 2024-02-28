import classNames from 'classnames'
import { useState } from 'react'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export type HeaderProps = Record<string, unknown>

export function Header() {
  const [isSticky, setIsSticky] = useState(false)

  const { setObservedNode } = useIntersectionObserver({
    callback: (e) => setIsSticky(e.intersectionRatio < 1),
    threshold: [1],
  })

  return (
    <header
      className={classNames(
        'z-header sticky  transition-shadow bg-white shadow-none',
        {
          'shadow-none': isSticky,
        }
      )}
      ref={setObservedNode}
    >
      {/* <Nav /> */}
    </header>
  )
}
