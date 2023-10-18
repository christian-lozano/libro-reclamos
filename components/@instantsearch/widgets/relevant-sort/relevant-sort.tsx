import InfoIcon from '@material-design-icons/svg/outlined/info.svg'
import { memo } from 'react'
import type { RelevantSortProvided } from 'react-instantsearch-core'
import { connectRelevantSort } from 'react-instantsearch-dom'

import { Button } from '@ui/button/button'
import { Icon } from '@ui/icon/icon'
import { Pill } from '@ui/pill/pill'

export type RevelantSortProps = RelevantSortProvided
function RelevantSortComponent({
  isVirtualReplica,
  isRelevantSorted,
  refine,
}: RevelantSortProps) {
  return !isVirtualReplica ? null : (
    <Pill color="nebula">
      <span className="flex items-center gap-1">
        <Icon icon={InfoIcon} />
        {isRelevantSorted
          ? 'Eliminamos algunos resultados de búsqueda para mostrarte los más relevantes.'
          : 'Mostrando todos los resultados.'}
      </span>

      <Button
        className="body-bold underline flex-shrink-0"
        onClick={() => refine(isRelevantSorted ? 0 : undefined)}
      >
        {isRelevantSorted
          ? 'Ver todos los resultados'
          : 'Ver resultados relevantes'}
      </Button>
    </Pill>
  )
}

export const RelevantSort = connectRelevantSort(memo(RelevantSortComponent))
