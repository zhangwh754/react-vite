import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import dayjs from 'dayjs'
import styles from './style.module.scss'
import HeaderIcon from '@/components/HeaderIcon'

type PropTypes = {}

const App: FC<PropTypes> = () => {
  return (
    <>
      <header>
        <HeaderIcon />
      </header>
      <main className={styles['app-container']}>
        <Outlet></Outlet>
      </main>
      <footer>慕问卷 &copy; 2024 - {dayjs().format('YYYY')}</footer>
    </>
  )
}

export default App
