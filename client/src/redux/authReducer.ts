import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface AuthState {
  user: string;
  userId: string;
  profilePicture: string;
  fullName: string;
  token: string
}

// Define the initial state using that type
const initialState: AuthState = {
  user: '',
  userId: '',
  profilePicture: '',
  fullName: '',
  token: ''
}

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, userId, profilePicture, fullName, accessToken } = action.payload
      state.user = user
      state.userId = userId
      state.profilePicture = profilePicture
      state.fullName = fullName
      state.token = accessToken
    },
    logout: (state) : any => {
      state.user = ''
      state.userId = ''
      state.token = ''
    }
  }
})

    // user: user.username,
    //         userId: user.id,
    //         fullName: user.fullName,
    //         profilePicture: user.profilePicture,
    //         accessToken: accessToken,

export const { setCredentials, logout } = authSlice.actions

export default authSlice.reducer