import axios from 'axios'

export type User = {
  email: string
  id: string
  name: string
  checked: boolean
}

const setSessionStorage = (data: User[]) => {
  sessionStorage.setItem(
    'auth',
    JSON.stringify({
      email: data?.[0]?.email,
      accessToken: data?.[0]?.id,
      accessTokenExpiresAt: new Date().getTime() + 1000 * 60 * 60 * 24,
      access: true,
      userName: data?.[0]?.name
    })
  )
}

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001' || 'https://json-server-vercel-tawny-one.vercel.app'

export const initialUserAuth = async (email: string, password: string) => {
  try {
    const response = await axios.get(
      `${API_URL}/users?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
    )
    if (!response?.data?.length) {
      throw new Error('Usuário não encontrado')
    }
    setSessionStorage(response.data)
    return { access: true, message: 'Usuário autenticado com sucesso', error: false, loading: false }
  } catch (error) {
    sessionStorage.removeItem('auth')
    return { access: false, message: error?.toString() || 'Erro ao autenticar usuário', error: true, loading: false }
  }
}
