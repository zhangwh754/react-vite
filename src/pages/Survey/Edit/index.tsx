import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import Header from './cpns/Header'
import styles from './style.module.scss'
import useGetLoadingSurveyDetailData from '@/hooks/useGetLoadingSurveyDetailData'
import SurveyComponentList from './cpns/SurveyComponentList'
import { setSelectedComponentId } from '@/store/component/componentReducer'
import EditProps from './cpns/EditProps'
import EditCanvas from './cpns/EditCanvas'

type PropTypes = {}

const Edit: FC<PropTypes> = () => {
  const { loading, error } = useGetLoadingSurveyDetailData()

  const dispatch = useDispatch()

  return (
    <div className={styles.wrapper}>
      <Header></Header>

      <div className={styles.container}>
        <div className={styles.left}>
          <SurveyComponentList></SurveyComponentList>
        </div>

        <div className={styles.middle} onClick={() => dispatch(setSelectedComponentId(''))}>
          <EditCanvas loading={loading}></EditCanvas>
        </div>

        <div className={styles.right}>
          <EditProps></EditProps>
        </div>
      </div>
    </div>
  )
}

export default Edit
