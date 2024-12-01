import axios from 'axios'
import { useEffect, useState } from 'react'
import { IUser, IEditin, FieldProps } from '@/components/MyAcoount/types'
import { toast } from 'react-toastify'

const fetchUserData = async () => {
  try {
    const response = await axios.get(`api/users/1`)
    return response.data[0]
  } catch (error) {
    console.error('Error fetching user data:', error)
  }
}

const fetchSaveUser = async (user: IUser | null) => {
  try {
    if (user) {
      await axios.put(`api/users/${user.id}`, user)
    }
  } catch (error) {
    console.error('Error saving user data:', error)
  }
}

export const useUser = () => {
  const [user, setUser] = useState<IUser | null>(null)
  const [isEditing, setIsEditing] = useState<IEditin>({
    name: false,
    email: false,
    password: false
  })

  useEffect(() => {
    fetchUserData()
      .then(data => {
        setUser(data)
      })
      .catch(() => {
        toast.error('Erro ao buscar dados do usuário.')
      })
  }, [])

  const handleSave = async () => {
    fetchSaveUser(user)
      .then(() => {
        setIsEditing({ name: false, email: false, password: false })
        toast.success('Informações salvas com sucesso!')
      })
      .catch(() => {
        toast.error('Erro ao salvar as informações')
      })
  }

  const handleEditClick = (field: FieldProps) => {
    setIsEditing(prevState => ({ ...prevState, [field]: !prevState[field] }))
  }

  const handleChange = (field: FieldProps, value: string) => {
    setUser(prevState => (prevState ? { ...prevState, [field]: value } : null))
  }

  return {
    handleSave,
    handleEditClick,
    handleChange,
    user,
    isEditing
  }
}
