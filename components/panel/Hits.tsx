import type { Hit as AlgoliaHit } from '@algolia/client-search'
import type { ComponentProps } from 'react'
import type { UseHitsProps } from 'react-instantsearch'
import { useHits } from 'react-instantsearch'

import { cx } from '@/utils/cx'

export type HitsProps<THit> = ComponentProps<'div'> &
  UseHitsProps & {
    hitComponent: (props: { hit: THit }) => JSX.Element
  }

export function Hits<THit extends AlgoliaHit<Record<string, unknown>>>({
  hitComponent: Hit,
  ...props
}: HitsProps<THit>) {
  const { hits } = useHits(props)

  return (
    <div className={cx('ais-Hits mt-10', props.className)}>
      <ol className="ais-Hits-list  ">
        {hits.map((hit) => (
          <li key={hit.objectID} className="ais-Hits-item">
            <Hit hit={hit as unknown as THit} />
          </li>
        ))}
      </ol>
    </div>
  )
}
