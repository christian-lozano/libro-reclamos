import React, { useState, useRef } from 'react'
import type {
  UseSearchBoxProps} from "react-instantsearch-hooks-web";
import {
  useInstantSearch,
  useSearchBox
} from 'react-instantsearch-hooks-web'

function CustomSearchBox(props: UseSearchBoxProps) {
  const { query, refine } = useSearchBox(props)
  const { status } = useInstantSearch()
  const [inputValue, setInputValue] = useState(query)
  const inputRef = useRef<HTMLInputElement>(null)

  const isSearchStalled = status === 'stalled'

  function setQuery(newQuery: string) {
    setInputValue(newQuery)

    refine(newQuery)
  }

  return (
    <div>
      <form
        noValidate
        action=""
        role="search"
        onSubmit={(event) => {
          event.preventDefault();
          event.stopPropagation();

          if (inputRef.current) {
            inputRef.current.blur();
          }
        }}
        onReset={(event) => {
          event.preventDefault();
          event.stopPropagation();

          setQuery("");

          if (inputRef.current) {
            inputRef.current.focus();
          }
        }}
      >
        <input
          autoFocus
          ref={inputRef}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          placeholder="Search for products"
          spellCheck={false}
          maxLength={512}
          type="search"
          value={inputValue}
          onChange={(event) => {
            setQuery(event.currentTarget.value);
          }}={true}
        />
        <button type="submit">Submit</button>
        <button
          type="reset"
          hidden={inputValue.length === 0 || isSearchStalled}
        >
          Reset
        </button>
        <span hidden={!isSearchStalled}>Searching…</span>
      </form>
    </div>
  )
}

export default CustomSearchBox
