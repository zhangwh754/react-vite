import { SEARCH_PAGESIZE } from './../constant/index'
import { useRequest } from 'ahooks'
import { getSurveyListData } from '@/network'
import type { ErrorCode, Res } from '@/network'
import { useSearchParams } from 'react-router-dom'
import { SEARCH_KEYWORD, SEARCH_PAGE } from '@/constant'

export default function useGetLoadingSurveyListData({
  isPublish = undefined,
  isStar = undefined,
  isDelete = false,
}: {
  isPublish?: boolean | undefined
  isStar?: boolean | undefined
  isDelete?: boolean | undefined
} = {}) {
  const [searchParams] = useSearchParams()

  const {
    data = {},
    error,
    loading,
  } = useRequest(
    () => {
      const searchVal = searchParams.get(SEARCH_KEYWORD) || ''
      const pageVal = parseInt(searchParams.get(SEARCH_PAGE) || '1')
      const pagesizeVal = parseInt(searchParams.get(SEARCH_PAGESIZE) || '10')

      return getSurveyListData({
        keyword: searchVal,
        pageNum: pageVal,
        pageSize: pagesizeVal,
        isPublish,
        isStar,
        isDelete,
      })
    },
    { refreshDeps: [searchParams] }
  )

  const { list = [], total = 0 } = data as Res

  return { surveyList: list as any[], total, error: error as ErrorCode, loading }
}
