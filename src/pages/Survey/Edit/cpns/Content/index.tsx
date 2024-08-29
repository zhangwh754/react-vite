import React, { FC, MouseEvent } from 'react'
import { useDispatch } from 'react-redux'
import { Spin } from 'antd'
import classNames from 'classnames'
import styles from './style.module.scss'
import useGetSurveyDetailInfo from '@/hooks/useGetSurveyDetailInfo'
import { getComponentConfigByType } from '@/components/SurveyComponent'
import EditProps from '../EditProps'
import { setSelectedComponentId } from '@/store/component/componentReducer'
import SurveyComponentList from '../SurveyComponentList'

type PropTypes = {
  loading: boolean
}

const Content: FC<PropTypes> = ({ loading }) => {
  const dispatch = useDispatch()

  const { componentsList, selectedComponentId } = useGetSurveyDetailInfo()

  const onComponentClick = (e: MouseEvent, id: string) => {
    e.stopPropagation()

    dispatch(setSelectedComponentId(id))
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <SurveyComponentList></SurveyComponentList>
        </div>

        <div className={styles.middle} onClick={() => dispatch(setSelectedComponentId(''))}>
          {loading ? (
            <div style={{ textAlign: 'center' }}>
              <Spin></Spin>
            </div>
          ) : (
            <div className={styles['canvas-container']}>
              {componentsList.map(item => {
                const { id, componentType, props } = item

                const { Component } = getComponentConfigByType(componentType)!

                return (
                  <div
                    key={id}
                    className={classNames({
                      [`${styles['canvas-row']}`]: true,
                      [`${styles.selected}`]: id === selectedComponentId,
                    })}
                    onClick={e => onComponentClick(e, id)}
                  >
                    <div className={styles['canvas-item']}>
                      <Component {...props}></Component>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        <div className={styles.right}>
          <EditProps></EditProps>
        </div>
      </div>
    </>
  )
}

export default Content
