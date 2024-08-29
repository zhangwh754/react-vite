import React, { FC } from 'react'
import Header from './cpns/Header'
import Content from './cpns/Content'
import styles from './style.module.scss'
import useGetLoadingSurveyDetailData from '@/hooks/useGetLoadingSurveyDetailData'

type PropTypes = {}

const Edit: FC<PropTypes> = () => {
  const { loading, error } = useGetLoadingSurveyDetailData()

  return (
    <div className={styles.wrapper}>
      <Header></Header>

      <Content loading={loading}></Content>
    </div>
  )
}

export default Edit
