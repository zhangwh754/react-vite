import { FC, useEffect, useRef, useState } from 'react'
import { Typography } from 'antd'
import styles from './style.module.scss'
import SurveyCard from '@/components/SurveyCard'
import type { PropTypes as SurveyItemType } from '@/components/SurveyCard'
import SearchInput from '@/components/SearchInput'
import LoadingIndicator from '@/components/LoadingIndicator'
import { useInViewport, useRequest } from 'ahooks'
import { getSurveyListData } from '@/network'
import { useSearchParams } from 'react-router-dom'
import { SEARCH_KEYWORD } from '@/constant'

const { Title } = Typography

type PropTypes = {}

const App: FC<PropTypes> = () => {
  const [surveyList, setSurveyList] = useState<SurveyItemType[]>([])
  const [isFinish, setIsFinish] = useState(false)

  const [searchParams] = useSearchParams()

  const {
    loading,
    run: getSurveyList,
    refresh,
  } = useRequest(
    async () => {
      const searchVal = searchParams.get(SEARCH_KEYWORD) || ''

      return await getSurveyListData({
        keyword: searchVal,
      })
    },
    {
      manual: true,
      onSuccess(data) {
        const { list = [], total = 0 } = data
        const newSurveyList = surveyList.concat(list)
        setSurveyList(newSurveyList)
        setIsFinish(newSurveyList.length >= total)
      },
    }
  )

  // 分页请求

  useEffect(() => {
    setSurveyList([])
    getSurveyList()
  }, [searchParams])

  // 滚动分页切换为dom可见就加载
  const loadMoreRef = useRef<HTMLElement>(null)

  // const { run: handleWindowContentScroll } = useDebounceFn(
  //   () => {
  //     if (!loadMoreRef.current) return

  //     const rect = loadMoreRef.current.getBoundingClientRect()

  //     if (rect.bottom < window.innerHeight) {
  //       getSurveyList()
  //     }
  //   },
  //   {
  //     wait: 500,
  //   }
  // )

  const [inViewport] = useInViewport(loadMoreRef)

  useEffect(() => {
    // window.addEventListener('scroll', handleWindowContentScroll)
    // return () => {
    //   window.removeEventListener('scroll', handleWindowContentScroll)
    // }
    if (inViewport) {
      getSurveyList()
    }
  }, [inViewport])

  return (
    <>
      <div className={styles['list-container']}>
        <div className={styles['list-header']}>
          <Title level={2}>问卷一览</Title>
          <SearchInput />
        </div>

        <LoadingIndicator full loading={loading} empty={surveyList.length == 0} />

        {surveyList &&
          surveyList.map(survey => {
            const { id } = survey

            return <SurveyCard key={id} {...survey}></SurveyCard>
          })}

        {isFinish ? (
          <div className={styles['list-footer']} onClick={refresh}>
            <span>没有更多了</span>
          </div>
        ) : (
          !loading && (
            <div className={styles['list-footer']}>
              <span ref={loadMoreRef}>上拉加载更多...</span>
            </div>
          )
        )}
      </div>
    </>
  )
}

export default App
