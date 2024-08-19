import { LOGIN_URL } from '@/router'
import React, { FC, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './style.module.scss'
import { useRequest } from 'ahooks'
import { getUser } from '@/network'
import { Avatar, Button, Space } from 'antd'

type PropTypes = {}

const UserInfo: FC<PropTypes> = () => {
  const { loading, data, error, run } = useRequest(getUser, { manual: true })
  const { pathname } = useLocation()
  const nav = useNavigate()

  useEffect(() => {
    if (pathname.includes('/login') || pathname.includes('/register')) return

    run()
  }, [pathname])

  return (
    <>
      {!loading && data ? (
        <Space align="center">
          <Avatar
            style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }}
            size="large"
            gap={4}
          >
            {data.nickname}
          </Avatar>
          <Button type="link" onClick={() => nav(LOGIN_URL)}>
            登出
          </Button>
        </Space>
      ) : (
        <Link className={styles.link} to={LOGIN_URL}>
          登录
        </Link>
      )}
    </>
  )
}

export default UserInfo
