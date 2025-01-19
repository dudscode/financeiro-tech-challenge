import axios from 'axios'

export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://json-server-vercel-tawny-one.vercel.app'

const getToken = () => {
  if (typeof window !== 'undefined') {
    window.sessionStorage.getItem('token') || ''
  }
}

const getBearerToken = () => `Bearer ${getToken()}`

const Api = axios.create({ baseURL: API_URL })

Api.interceptors.request.use(config => {
  config.headers.authorization = getBearerToken()
  config.headers['Content-Type'] = 'application/json'

  return config
})

Api.interceptors.response.use(
  response => {
    return response
  },
  async err => {
    return Promise.reject(err)
  }
)

export default Api
