import { FC, useEffect, useRef, useState } from 'react'
import { Typography } from 'antd'
import styles from './style.module.scss'
import SurveyCard from '@/components/SurveyCard'
import type { PropTypes as SurveyItemType } from '@/components/SurveyCard'
import SearchInput from '@/components/SearchInput'
import LoadingIndicator from '@/components/LoadingIndicator'
import { useDebounceFn, useRequest } from 'ahooks'
import { getSurveyListData } from '@/network'

const { Title } = Typography

type PropTypes = {}

const App: FC<PropTypes> = () => {
  const [surveyList, setSurveyList] = useState<SurveyItemType[]>([])
  const [isFinish, setIsFinish] = useState(false)

  const {
    loading,
    run: getSurveyList,
    refresh,
  } = useRequest(
    async () => {
      return await getSurveyListData()
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

  useEffect(() => {
    getSurveyList()
  }, [])

  const loadMoreRef = useRef<HTMLElement>(null)

  const { run: handleWindowContentScroll } = useDebounceFn(
    () => {
      if (!loadMoreRef.current) return

      const rect = loadMoreRef.current.getBoundingClientRect()

      if (rect.bottom < window.innerHeight) {
        getSurveyList()
      }
    },
    {
      wait: 500,
    }
  )

  useEffect(() => {
    window.addEventListener('scroll', handleWindowContentScroll)

    return () => {
      window.removeEventListener('scroll', handleWindowContentScroll)
    }
  }, [])

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
