import React, { FC } from 'react'
import getLoadingSurveyDetailData from '@/hooks/useGetLoadingSurveyDetailData'
import LoadingIndicator from '@/components/LoadingIndicator'
import Header from './cpns/Header'
import Content from './cpns/Content'
import styles from './style.module.scss'

type PropTypes = {}

const Edit: FC<PropTypes> = () => {
  // const { surveyDetail = {}, loading } = getLoadingSurveyDetailData()

  // const { id, title } = surveyDetail

  // return (
  //   <>
  //     <div>Edit Page</div>

  //     <LoadingIndicator loading={loading} />

  //     {!loading && (
  //       <>
  //         <p>id: {id}</p>
  //         <p>title: {title}</p>
  //       </>
  //     )}
  //   </>
  // )
  return (
    <div className={styles.wrapper}>
      <Header></Header>
      <Content></Content>
    </div>
  )
}

export default Edit
