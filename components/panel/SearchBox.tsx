import type { ComponentProps } from 'react'
import { useRef } from 'react'
import type { UseSearchBoxProps } from 'react-instantsearch-hooks'

import { ControlledSearchBoxTw } from './ControlledSearchBoxTw'

export type SearchBoxProps = ComponentProps<'div'> & UseSearchBoxProps

export function SearchBox(props: SearchBoxProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <ControlledSearchBoxTw
      className={props.className}
      inputRef={inputRef}
      pros={props}
      // isSearchStalled={isSearchStalled}
      placeholder={props.placeholder}
    />
  )
}
