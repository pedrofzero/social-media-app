import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './store/user'

export const store = configureStore({
  reducer: {
    users: usersSlice
  },
})