import { useState, useEffect } from 'react'
import client from 'services/client'

export const useRequest = (url: string) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      if (url) {
        setLoading(true)
        const reponse = await client.get(url)
        setLoading(false)
        setData(reponse.data)
      }
    })()
  }, [url])

  return [data, loading]
}
