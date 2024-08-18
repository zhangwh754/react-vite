import { useRequest } from 'ahooks'
import { getSurveyListData } from '@/network'
import type { Res } from '@/network'
import CustomError from '@/network/CustomError'

export default function useGetLoadingSurveyListData() {
  const { data = {}, error, loading } = useRequest(getSurveyListData)

  const { list = [], total = 0 } = data as Res

  return { surveyList: list as any[], total, error: error as number | undefined, loading }
}
