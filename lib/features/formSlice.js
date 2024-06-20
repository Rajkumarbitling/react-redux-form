import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload)
    },
    updateUser: (state, action) => {
      const filtered = state.value.filter(item => item.uid !== action.payload.uid)
      state.value = [...filtered, action.payload]
    },
    deleteUser: (state, action) => {
      const filtered = state.value.filter(item => item.uid !== action.payload)
      state.value = [...filtered]
    },
  },
})

// Action creators are generated for each case reducer function
export const { addUser, updateUser, deleteUser } = formSlice.actions

export default formSlice.reducer