import axios from 'axios'
import { Dispatch } from 'redux'
import { setUser } from '@/redux/features/slices/user'
import { toast } from 'react-toastify'
import { IUser } from '@/components/MyAcoount/types'

export const fetchUserData = () => {
  return async (dispatch: Dispatch) => {
    axios
      .get(`/api/users/1`)
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
        .put(`api/users/${user.id}`, user)
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
