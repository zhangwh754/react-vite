import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

export default function useGetSurveyDetailInfo() {
  const { componentsList } = useSelector((state: RootState) => state.component)

  return { componentsList }
}
