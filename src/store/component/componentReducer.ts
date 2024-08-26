import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ComponentPropsType } from '@/components/SurveyComponent'

type ComponentType = {
  id: string
  title: string
  componentType: 'surveyTitle' | 'surveyInput'
  props: ComponentPropsType
}

export interface ComponentState {
  componentsList: ComponentType[]
}

const initialState: ComponentState = {
  componentsList: [],
}

export const componentSlice = createSlice({
  name: 'component',
  initialState,
  reducers: {
    setComponentsListReducer: (state: ComponentState, action: PayloadAction<ComponentState>) => {
      return action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setComponentsListReducer } = componentSlice.actions

export default componentSlice.reducer
