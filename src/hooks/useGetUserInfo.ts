import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

export default function useGetUserInfo() {
  const { username, nickname } = useSelector((state: RootState) => state.user)

  return { username, nickname }
}
