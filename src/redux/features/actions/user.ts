import axios from 'axios'
import { Dispatch } from 'redux'
import { setUser } from '@/redux/features/slices/user'
import { toast } from 'react-toastify'
import { IUser } from '@/components/MyAcoount/types'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://json-server-vercel-tawny-one.vercel.app'

export const fetchUserData = () => {
  return async (dispatch: Dispatch) => {
    axios
      .get(`${API_URL}/users/1`)
      .then(user => {
        dispatch(setUser(user.data))
      })
      .catch(error => {
        toast.error('Erro ao buscar dados do usuário.')
      })
      .finally(() => {
        console.log('Extrato fetched!')
      })
  }
}

export const fetchSaveUser = (user: IUser | null) => {
  return async (dispatch: Dispatch) => {
    if (user) {
      axios
        .put(`${API_URL}/users/${user.id}`, user)
        .then(response => {
          dispatch(setUser(response.data))
          toast.success('Informações salvas com sucesso!')
        })
        .catch(error => {
          toast.error('Erro ao salvar as informações')
        })
        .finally(() => {
          console.log('Extrato fetched!')
        })
    } else {
      toast.error('Usuário não pode ser nulo.')
    }
  }
}
