import { useRequest } from 'ahooks'
import { getSurveyListData } from '@/network'
import type { ErrorCode, Res } from '@/network'
import { useSearchParams } from 'react-router-dom'
import { SEARCH_KEYWORD } from '@/constant'

export default function useGetLoadingSurveyListData() {
  const [searchParams] = useSearchParams()

  const searchVal = searchParams.get(SEARCH_KEYWORD) || ''

  const {
    data = {},
    error,
    loading,
  } = useRequest(() => getSurveyListData({ keyword: searchVal }), { refreshDeps: [searchVal] })

  const { list = [], total = 0 } = data as Res

  return { surveyList: list as any[], total, error: error as ErrorCode, loading }
}
