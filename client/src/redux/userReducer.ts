import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface UserState {
  user: String
}

// Define the initial state using that type
const initialState: UserState = {
  user: ''
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    }

  }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer