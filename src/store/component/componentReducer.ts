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
  selectedComponentId: string
  componentsList: ComponentType[]
}

const initialState: ComponentState = {
  selectedComponentId: '',
  componentsList: [],
}

export const componentSlice = createSlice({
  name: 'component',
  initialState,
  reducers: {
    setComponentsStateReducer: (state: ComponentState, action: PayloadAction<ComponentState>) => {
      return action.payload
    },
    setSelectedComponentId: (state: ComponentState, action: PayloadAction<string>) => {
      return { ...state, selectedComponentId: action.payload }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setComponentsStateReducer, setSelectedComponentId } = componentSlice.actions

export default componentSlice.reducer
