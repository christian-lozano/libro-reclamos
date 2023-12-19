import type { UseQueryRulesProps } from 'react-instantsearch'
import { useQueryRules } from 'react-instantsearch'

export type QueryRuleContextProps = Partial<
  Pick<UseQueryRulesProps, 'trackedFilters' | 'transformRuleContexts'>
>

export function QueryRuleContext(props: QueryRuleContextProps) {
  useQueryRules(props)
  return null
}
