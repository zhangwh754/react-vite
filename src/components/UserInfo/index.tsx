import { LOGIN_URL } from '@/router'
import { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './style.module.scss'
import { Avatar, Button, Space } from 'antd'
import useGetLoadingUserData from '@/hooks/useGetLoadingUserData'
import { removeTokenLocal } from '@/utils/user.local'
import { useDispatch } from 'react-redux'
import { logOutReducer } from '@/store/userReducer'

type PropTypes = {}

const UserInfo: FC<PropTypes> = () => {
  const { loading, username, nickname } = useGetLoadingUserData()
  const dispatch = useDispatch()
  const nav = useNavigate()

  const onLoginOut = () => {
    removeTokenLocal()
    dispatch(logOutReducer())
    nav(LOGIN_URL)
  }

  return (
    <>
      {!loading && username ? (
        <Space align="center">
          <Avatar
            style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }}
            size="large"
            gap={4}
          >
            {nickname}
          </Avatar>
          <Button type="link" onClick={onLoginOut}>
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
