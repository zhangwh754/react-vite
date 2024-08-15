import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
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
      <footer>footer</footer>
    </>
  )
}

export default App
