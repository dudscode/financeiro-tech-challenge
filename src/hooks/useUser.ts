import { useEffect, useState } from 'react'
import { IUser, IEditin, FieldProps } from '@/components/MyAcoount/types'
import { useDispatch } from 'react-redux'
import { fetchUserData, fetchSaveUser } from '@/redux/features/actions/user'

export const useUser = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState<IUser | null>(null)
  const [isEditing, setIsEditing] = useState<IEditin>({
    name: false,
    email: false,
    password: false
  })

  useEffect(() => {
    fetchUserData()(dispatch)
  }, [])

  const handleSave = async () => {
    fetchSaveUser(user)(dispatch)
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
