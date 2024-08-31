import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

export default function useGetSurveyDetailInfo() {
  const { componentsList, selectedComponentId, copiedComponentData } = useSelector(
    (state: RootState) => state.component
  )

  const selectedComponent = componentsList.find(item => item.id == selectedComponentId)

  return { componentsList, selectedComponentId, selectedComponent, copiedComponentData }
}
