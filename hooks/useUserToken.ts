import { useRef } from 'react'

export function useUserToken() {
  const userTokenRef = useRef<string | undefined>(undefined)

  // useEffect(() => {
  //   searchInsights('onUserTokenChange', (userToken) => {
  //     userTokenRef.current = userToken
  //   })
  // }, [])

  return userTokenRef.current
}
