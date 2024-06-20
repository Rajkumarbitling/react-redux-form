import { createSlice } from '@reduxjs/toolkit'
import { addUserAction, deleteUserAction, updateUserAction } from './formAction'

const initialState = {
  value: [],
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addUser : addUserAction,
    updateUser: updateUserAction,
    deleteUser: deleteUserAction,
  },
})

// Action creators are generated for each case reducer function
export const { addUser, updateUser, deleteUser } = formSlice.actions

export default formSlice.reducer