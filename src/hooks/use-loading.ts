import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export const useLoading = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleStart = (url: string) => {
      url !== router.pathname ? setLoading(true) : setLoading(false)
    }
    const handleComplete = (url: string) => setLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)
  }, [router])

  return [loading]
}
