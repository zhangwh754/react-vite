import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './style.module.scss'

type PropTypes = {}

const App: FC<PropTypes> = () => {
  return (
    <>
      <header>
        <h3>问卷调查</h3>
      </header>
      <main className={styles['app-container']}>
        <Outlet></Outlet>
      </main>
      <footer>footer</footer>
    </>
  )
}

export default App
