import { useParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { getSurveyDetailData } from '@/network'
import type { ErrorCode } from '@/network'
import { useEffect } from 'react'

export default function useGetLoadingSurveyDetailData() {
  const { id } = useParams()
  const { error, loading, run } = useRequest(id => getSurveyDetailData(id), {
    manual: true,
    onSuccess(data) {
      debugger
    },
  })

  useEffect(() => {}, [id])

  return { loading, error }
}
