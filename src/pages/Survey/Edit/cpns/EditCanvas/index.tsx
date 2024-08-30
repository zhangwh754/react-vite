import React, { FC, MouseEvent } from 'react'
import { useDispatch } from 'react-redux'
import { Spin } from 'antd'
import classNames from 'classnames'
import styles from './style.module.scss'
import { setSelectedComponentId } from '@/store/component/componentReducer'
import useGetSurveyDetailInfo from '@/hooks/useGetSurveyDetailInfo'
import { getComponentConfigByType } from '@/components/SurveyComponent'

type PropTypes = {
  loading: boolean
}

const EditCanvas: FC<PropTypes> = props => {
  const { loading } = props

  const dispatch = useDispatch()

  const { componentsList, selectedComponentId } = useGetSurveyDetailInfo()

  const onComponentClick = (e: MouseEvent, id: string) => {
    e.stopPropagation()

    dispatch(setSelectedComponentId(id))
  }

  return (
    <>
      {loading ? (
        <div style={{ textAlign: 'center' }}>
          <Spin></Spin>
        </div>
      ) : (
        <div className={styles['canvas-container']}>
          {componentsList.map(item => {
            const { id, componentType, props, isLock } = item

            const { Component } = getComponentConfigByType(componentType)

            return (
              <div
                key={id}
                className={classNames({
                  [`${styles['canvas-row']}`]: true,
                  [`${styles.selected}`]: id === selectedComponentId,
                  [`${styles.lock}`]: isLock,
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
    </>
  )
}

export default EditCanvas
