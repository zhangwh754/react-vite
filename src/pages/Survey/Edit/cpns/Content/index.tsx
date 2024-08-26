import React, { FC } from 'react'
import styles from './style.module.scss'
import SurveyTitle from '@/components/SurveyComponent/SurveyTitle/component'
import SurveyInput from '@/components/SurveyComponent/SurveyInput/component'

type PropTypes = {}

const Content: FC<PropTypes> = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.left}></div>
        <div className={styles.middle}>
          <div className={styles['canvas-container']}>
            <div className={styles['canvas-row']}>
              <div className={styles['canvas-item']}>
                <SurveyTitle></SurveyTitle>
              </div>
            </div>
            <div className={styles['canvas-row']}>
              <div className={styles['canvas-item']}>
                <SurveyInput></SurveyInput>
              </div>
            </div>
            <div className={styles['canvas-row']}>
              <div className={styles['canvas-item']}>
                <SurveyInput></SurveyInput>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}></div>
      </div>
    </>
  )
}

export default Content
