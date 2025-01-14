import axios from 'axios'
import { toast } from 'react-toastify'

export const useCreate = () => {
  const fatchCreate = async (email: string, password: string, name: string) => {
    return axios
      .post(`/api/user`, {
        username: name,
        email,
        password
      })
      .then(data => {
        toast.success(data.data.message)
        return data
      })
      .catch(error => {
        toast.error(error.response.data.message)
        throw new Error(error.response.data.message)
      })
  }

  return {
    create: fatchCreate
  }
}
