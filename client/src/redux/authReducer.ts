import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface AuthState {
  user: String
  userId: String
  token: String
}

// Define the initial state using that type
const initialState: AuthState = {
  user: '',
  userId: '',
  token: ''
}

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { username, userId, token } = action.payload
      state.user = username
      state.userId = userId
      state.token = token
    },
    logout: (state) : any => {
      state.user = ''
      state.userId = ''
      state.token = ''
    }
  }
})

export const { setCredentials, logout } = authSlice.actions

export default authSlice.reducer