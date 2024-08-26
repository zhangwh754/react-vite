import React, { FC } from 'react'
import { Spin } from 'antd'
import styles from './style.module.scss'
import useGetSurveyDetailInfo from '@/hooks/useGetSurveyDetailInfo'
import { getComponentConfigByType } from '@/components/SurveyComponent'

type PropTypes = {
  loading: boolean
}

const Content: FC<PropTypes> = ({ loading }) => {
  const { componentsList } = useGetSurveyDetailInfo()

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
                const { id, componentType } = item

                return (
                  <div key={id} className={styles['canvas-row']}>
                    <div className={styles['canvas-item']}>
                      {getComponentConfigByType(componentType)(item.props)}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        <div className={styles.right}></div>
      </div>
    </>
  )
}

export default Content
