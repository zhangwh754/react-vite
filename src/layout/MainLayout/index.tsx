import React, { FC, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import dayjs from 'dayjs'
import styles from './style.module.scss'
import HeaderIcon from '@/components/HeaderIcon'
import UserInfo from '@/components/UserInfo'
import { Skeleton } from 'antd'

type PropTypes = {}

const App: FC<PropTypes> = () => {
  return (
    <>
      <header>
        <HeaderIcon />
        <UserInfo></UserInfo>
      </header>
      <main className={styles['app-container']}>
        <Suspense fallback={<Skeleton />}>
          <Outlet></Outlet>
        </Suspense>
      </main>
      <footer>慕问卷 &copy; 2024 - {dayjs().format('YYYY')}</footer>
    </>
  )
}

export default App
