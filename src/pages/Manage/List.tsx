import React, { FC, useEffect, useState } from 'react'
import { Typography } from 'antd'
import styles from './style.module.scss'
import SurveyCard from '@/components/SurveyCard'
import SearchInput from '@/components/SearchInput'
import { getSurveyListData } from '@/network'

const { Title } = Typography

type PropTypes = {}

const App: FC<PropTypes> = () => {
  const [surveyList, setSurveyList] = useState<any[]>([])

  useEffect(() => {
    async function foo() {
      const data = await getSurveyListData()

      const { list, total } = data

      setSurveyList(list)
    }
    foo()
  }, [])

  return (
    <>
      <div className={styles['list-container']}>
        <div className={styles['list-header']}>
          <Title level={2}>问卷一览</Title>
          <SearchInput />
        </div>

        {surveyList.map(survey => {
          const { id } = survey

          return <SurveyCard key={id} {...survey}></SurveyCard>
        })}
      </div>
    </>
  )
}

export default App
