export interface IUser {
  id: number
  name: string
  email: string
  password: string
}

export interface IEditin {
  name: boolean
  email: boolean
  password: boolean
}

export type FieldProps = 'name' | 'email' | 'password'

export interface IFormField {
  label: string
  value: string
  isEditing: boolean
  onChange: (value: string) => void
  onEdit: (field: string) => void
}
