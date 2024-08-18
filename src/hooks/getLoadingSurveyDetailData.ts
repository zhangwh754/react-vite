import { useParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { getSurveyDetailData } from '@/network'
import type { ErrorCode } from '@/network'

export default function useGetLoadingSurveyDetailData() {
  const { id } = useParams()

  const { data = {}, error, loading } = useRequest(() => getSurveyDetailData({ id }))

  return { surveyDetail: data, error: error as ErrorCode, loading }
}
