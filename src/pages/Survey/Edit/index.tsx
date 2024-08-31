import { FC } from 'react'
import { useDispatch } from 'react-redux'
import styles from './style.module.scss'
import useGetLoadingSurveyDetailData from '@/hooks/useGetLoadingSurveyDetailData'
import SurveyComponentList from './cpns/SurveyComponentList'
import { setSelectedComponentId } from '@/store/component/componentReducer'
import EditProps from './cpns/EditProps'
import EditCanvas from './cpns/EditCanvas'
import EditHeader from './cpns/EditHeader'

type PropTypes = {}

const Edit: FC<PropTypes> = () => {
  const { loading } = useGetLoadingSurveyDetailData()

  const dispatch = useDispatch()

  return (
    <div className={styles.wrapper}>
      <EditHeader></EditHeader>

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
