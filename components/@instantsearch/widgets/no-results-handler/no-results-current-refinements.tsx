import { useAtomValue } from 'jotai/utils'

import {
  CurrentRefinements,
  refinementCountAtom,
} from '@instantsearch/widgets/current-refinements/current-refinements'

export function NoResultsCurrentRefinements() {
  const refinementCount = useAtomValue(refinementCountAtom)

  if (refinementCount === 0) return null

  return (
    <li>
      <span className="-ml-1.5">
        <span>Es posible que también quieras eliminar algunos filtros.</span>
        <CurrentRefinements className="mt-2" />
      </span>
    </li>
  )
}
