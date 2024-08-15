import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './style.module.scss'

type PropTypes = {}

const ManageLayout: FC<PropTypes> = () => {
  return (
    <>
      <div className={styles['manage-layout']}>
        <div className={styles['manage-panel']}>
          <button>新建问卷</button>

          <div className={styles['manage-navigation']}>
            <a className={styles['link']} href="#">
              我的问卷
            </a>
            <a className={styles['link']} href="#">
              标星问卷
            </a>
            <a className={styles['link']} href="#">
              回收站
            </a>
          </div>
        </div>
        <div className={styles['manage-content']}>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  )
}

export default ManageLayout
