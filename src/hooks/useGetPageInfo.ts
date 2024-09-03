import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { useMemo } from 'react'

export default function useGetPageInfo() {
  const { title, desc } = useSelector((state: RootState) => state.page)

  return useMemo(
    () => ({
      title,
      desc,
    }),
    [title, desc]
  )
}
