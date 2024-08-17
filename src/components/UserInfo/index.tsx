import { LOGIN_URL } from '@/router'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.scss'

type PropTypes = {}

const UserInfo: FC<PropTypes> = () => {
  return (
    <>
      <Link className={styles.link} to={LOGIN_URL}>
        登录
      </Link>
    </>
  )
}

export default UserInfo
