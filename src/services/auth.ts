import axios from 'axios'

export type User = {
  email: string
  id: string
  name: string
  checked: boolean
}

const setSessionStorage = (data: string, name: string) => {
  sessionStorage.setItem(name, data)
}

export const initialUserAuth = async (email: string, password: string) => {
  return await axios
    .post(`/api/user/auth`, {
      email,
      password
    })
    .then(response => {
      console.log('response: ', response)

      setSessionStorage(
        JSON.stringify({
          email: response.data.result.user.email,
          accessToken: response.data.result.user.id,
          accessTokenExpiresAt: new Date().getTime() + 1000 * 60 * 60 * 24,
          access: true,
          userName: response.data.result.user.name
        }),
        'auth'
      )
      setSessionStorage(response.data.result.token, 'token')
      return { access: true, message: 'Usuário autenticado com sucesso', error: false, loading: false }
    })
    .catch(error => {
      sessionStorage.removeItem('auth')
      return {
        access: false,
        message: (error as any)?.response?.data?.message || 'Erro ao autenticar usuário',
        error: true,
        loading: false
      }
    })
}
