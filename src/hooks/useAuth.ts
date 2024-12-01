import { initialUserAuth } from '@/services/auth'

export const useAuth = () => {
  return {
    login: async (email: string, password: string) => {
      return await initialUserAuth(email, password)
    },
    logout: () => {
      sessionStorage.removeItem('auth')
      return { access: false }
    },
    getSession: () => {
      if (typeof window !== 'undefined') {
        const auth = sessionStorage.getItem('auth')
        return auth ? JSON.parse(auth) : { access: false }
      }
    }
  }
}
