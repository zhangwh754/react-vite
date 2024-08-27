import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Spin } from 'antd'
import styles from './style.module.scss'
import useGetSurveyDetailInfo from '@/hooks/useGetSurveyDetailInfo'
import { getComponentConfigByType } from '@/components/SurveyComponent'
import EditProps from '../EditProps'
import { setSelectedComponentId } from '@/store/component/componentReducer'
import classNames from 'classnames'

type PropTypes = {
  loading: boolean
}

const Content: FC<PropTypes> = ({ loading }) => {
  const dispatch = useDispatch()

  const { componentsList, selectedComponentId } = useGetSurveyDetailInfo()

  const onComponentClick = (id: string) => {
    dispatch(setSelectedComponentId(id))
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.left}></div>

        <div className={styles.middle}>
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
                    onClick={() => onComponentClick(id)}
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
