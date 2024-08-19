import { FC } from 'react'
import { Typography } from 'antd'
import styles from './style.module.scss'
import SurveyCard from '@/components/SurveyCard'
import SearchInput from '@/components/SearchInput'
import getLoadingSurveyListData from '@/hooks/getLoadingSurveyListData'
import LoadingIndicator from '@/components/LoadingIndicator'
import CustomPagination from '@/components/CustomPagination'

const { Title } = Typography

type PropTypes = {}

const App: FC<PropTypes> = () => {
  const { surveyList, total, loading } = getLoadingSurveyListData({ isStar: true })

  return (
    <>
      <div className={styles['list-container']}>
        <div className={styles['list-header']}>
          <Title level={2}>标星问卷</Title>
          <SearchInput />
        </div>
        <LoadingIndicator full loading={loading} empty={surveyList.length == 0} />
        {surveyList &&
          surveyList.map(survey => {
            const { id } = survey

            return <SurveyCard key={id} {...survey}></SurveyCard>
          })}

        <CustomPagination total={total} />
      </div>
    </>
  )
}

export default App
