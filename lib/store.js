import { configureStore } from '@reduxjs/toolkit'
import formSlice from './features/formSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        form: formSlice
    }
  })
}