import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

export default function useGetPageInfo() {
  const { title, desc } = useSelector((state: RootState) => state.page)

  return { title, desc }
}
