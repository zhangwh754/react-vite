import { FC, useEffect } from 'react'
import { Typography } from 'antd'
import styles from './style.module.scss'
import SurveyCard from '@/components/SurveyCard'
import SearchInput from '@/components/SearchInput'
import getLoadingSurveyListData from '@/hooks/getLoadingSurveyListData'
import LoadingIndicator from '@/components/LoadingIndicator'

const { Title } = Typography

type PropTypes = {}

const App: FC<PropTypes> = () => {
  const { surveyList, loading, error } = getLoadingSurveyListData()

  useEffect(() => {
    // if (error == -99) {
    //   console.log('custom error')
    // }
  }, [error])

  return (
    <>
      <div className={styles['list-container']}>
        <div className={styles['list-header']}>
          <Title level={2}>问卷一览</Title>
          <SearchInput />
        </div>

        <LoadingIndicator loading={loading} empty={surveyList.length == 0} />

        {surveyList &&
          surveyList.map(survey => {
            const { id } = survey

            return <SurveyCard key={id} {...survey}></SurveyCard>
          })}
      </div>
    </>
  )
}

export default App
