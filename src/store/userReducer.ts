import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  username: string
  nickname: string
}

const initialState: UserState = {
  username: '',
  nickname: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginReducer: (_state: UserState, action: PayloadAction<UserState>) => {
      return action.payload
    },
    logOutReducer: (_state: UserState) => {
      return initialState
    },
  },
})

// Action creators are generated for each case reducer function
export const { loginReducer, logOutReducer } = userSlice.actions

export default userSlice.reducer
