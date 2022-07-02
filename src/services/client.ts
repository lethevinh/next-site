import axios from 'axios'

const client = axios.create({
  baseURL: `${process.env.API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
})
// custom resopnse interceptor
client.interceptors.response.use(
  (response: any) => {
    return response.data
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

export default client
