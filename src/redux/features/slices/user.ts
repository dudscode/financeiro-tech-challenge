import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '@/components/MyAcoount/types'

const initialState = {
  user: {
    id: 0,
    name: '',
    email: '',
    password: ''
  }
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: { payload: IUser }) => {
      return {
        ...state,
        user: action.payload
      }
    }
  }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
