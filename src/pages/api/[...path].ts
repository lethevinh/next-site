import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy from 'http-proxy'
import Cookies from 'cookies'
import { KEY_ACCESS_TOKEN } from '@constants'

export const config = {
  api: {
    bodyParser: false,
  },
}

const proxy = httpProxy.createProxyServer()

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  return new Promise((resolve) => {
    const cookies = new Cookies(req, res)
    const accessToken = cookies.get(KEY_ACCESS_TOKEN)
    if (accessToken) {
      req.headers.Authorization = `Bearer ${accessToken}`
    }

    req.headers.cookie = ''

    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: false,
    })

    proxy.once('proxyRes', () => {
      resolve(true)
    })
  })
}
