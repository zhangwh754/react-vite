import React, { FC } from 'react'
import styles from './style.module.scss'

type PropTypes = {}

const Header: FC<PropTypes> = () => {
  return (
    <>
      <div className={styles.header}>Header</div>
    </>
  )
}

export default Header
