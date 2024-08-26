import React, { FC } from 'react'
import styles from './style.module.scss'

type PropTypes = {}

const Content: FC<PropTypes> = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.left}></div>
        <div className={styles.middle}>
          <div className={styles['canvas-container']}></div>
        </div>
        <div className={styles.right}></div>
      </div>
    </>
  )
}

export default Content
