import { configureStore } from '@reduxjs/toolkit'
import contactReducer from '../features/contact/contactSlice'
import uiReducer from '../features/ui/uiSlice'

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    ui: uiReducer,
  },
})
