import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PageState {
  title?: string
  desc?: string
}

const initialState: PageState = {
  title: '问卷',
  desc: '',
}

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPageInfoReducer: (_state: PageState, action: PayloadAction<PageState>) => {
      return action.payload
    },
    setPagePropsUpdate: (state: PageState, action: PayloadAction<PageState>) => {
      return { ...state, ...action.payload }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPageInfoReducer, setPagePropsUpdate } = pageSlice.actions

export default pageSlice.reducer
