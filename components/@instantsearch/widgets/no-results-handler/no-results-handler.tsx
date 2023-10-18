import { memo } from 'react'
import isEqual from 'react-fast-compare'
import type { StateResultsProvided } from 'react-instantsearch-core'
import { connectStateResults } from 'react-instantsearch-dom'

import { NoResultsCurrentRefinements } from './no-results-current-refinements'
import { NoResultsQuerySuggestions } from './no-results-query-suggestions'

export type NoResultsHandlerProps = StateResultsProvided & {
  children: React.ReactNode
}
export type NoResultsProps = {
  query: string
  isSearching: boolean
}
const NoResults = memo(
  function NoResults({ query }: NoResultsProps) {
    return (
      <div className="laptop:my-10 laptop:ml-[10%]">
        <h4 className="mb-6">
          <span className="text-sm font-normal text-neutral-dark laptop:text-brand-black laptop:heading-4">
            Lo sentimos, no encontramos resultados para
          </span>
          <span className="block mt-3 laptop:inline laptop:mt-0">
            “{query}”
          </span>
        </h4>

        <p className="font-bold mb-2">Prueba lo siguiente:</p>
        <ul className="flex flex-col gap-2 list-disc list-inside">
          <li>
            <span className="-ml-1.5">Corrige tu ortografía</span>
          </li>
          <NoResultsQuerySuggestions query={query} />
          <NoResultsCurrentRefinements />
        </ul>
      </div>
    )
  },
  // Not re-rendering when it's searching allows to avoid inconsistent UIs
  // where you click on a Query Suggestion, the "no results" title updates
  // with the clicked query showing that there's no result whereas it's only
  // loading waiting for new results.
  (_, nextProps) => nextProps.isSearching === true
)
function NoResultsHandlerComponent({
  children,
  searchState,
  searchResults,
  searching,
}: NoResultsHandlerProps) {
  if (searchState?.query && searchResults?.nbHits === 0) {
    return <NoResults query={searchState.query} isSearching={searching} />
  }
  return <>{children}</>
}
export const NoResultsHandler = connectStateResults(
  memo(NoResultsHandlerComponent, isEqual)
)
