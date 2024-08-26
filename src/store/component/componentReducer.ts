import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ComponentState {
  componentsList: any[]
}

const initialState: ComponentState = {
  componentsList: [],
}

export const userSlice = createSlice({
  name: 'component',
  initialState,
  reducers: {
    setReducer: (state: ComponentState, action: PayloadAction<ComponentState>) => {
      return action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setReducer } = userSlice.actions

export default userSlice.reducer
