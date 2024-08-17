import React, { FC } from 'react'
import { Typography } from 'antd'
import styles from './style.module.scss'
import SurveyCard from '@/components/SurveyCard'
import SearchInput from '@/components/SearchInput'

const { Title } = Typography

type PropTypes = {}

const surveyDataList = [
  {
    id: 1,
    title: '问卷1',
    answerCount: 0,
    createTime: '2024-08-12 00:00:00',
    isStar: false,
    isPublish: false,
  },
  {
    id: 2,
    title: '问卷2',
    answerCount: 3,
    createTime: '2024-08-01 00:00:00',
    isStar: false,
    isPublish: true,
  },
  {
    id: 3,
    title: '问卷3',
    answerCount: 10,
    createTime: '2024-07-31 00:00:00',
    isStar: true,
    isPublish: true,
  },
]

const App: FC<PropTypes> = () => {
  return (
    <>
      <div className={styles['list-container']}>
        <div className={styles['list-header']}>
          <Title level={2}>问卷一览</Title>
          <SearchInput />
        </div>
        {surveyDataList.map(survey => {
          const { id } = survey

          return <SurveyCard key={id} {...survey}></SurveyCard>
        })}
      </div>
    </>
  )
}

export default App
