import React, { FC } from 'react'
import Header from './cpns/Header'
import Content from './cpns/Content'
import styles from './style.module.scss'
import useGetLoadingSurveyDetailData from '@/hooks/useGetLoadingSurveyDetailData'

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
  const { loading, error } = useGetLoadingSurveyDetailData()

  return (
    <div className={styles.wrapper}>
      <Header></Header>

      <Content loading={loading}></Content>
    </div>
  )
}

export default Edit
