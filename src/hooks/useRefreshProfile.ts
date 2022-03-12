import { useState, useEffect, useRef } from 'react'

type UseRefreshProfile = () => {
    handleRefresh: () => void
    isRefreshing: boolean
}

const useRefreshProfile: UseRefreshProfile = () => {
  const timeoutIdRef = useRef<number | null>()
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = () => {
    setIsRefreshing(true)

    timeoutIdRef.current = +setTimeout(() => {
      setIsRefreshing(false)
      timeoutIdRef.current = null
    }, 1000)
  }
  
  useEffect(() => {
    return () => {
      timeoutIdRef.current && clearTimeout(timeoutIdRef.current)
    }
  }, [])

  return {
    isRefreshing,
    handleRefresh,
  }
}

export default useRefreshProfile
