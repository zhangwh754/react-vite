import { useRequest } from 'ahooks'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getUser } from '@/network'
import { loginReducer } from '@/store/userReducer'
import useGetUserInfo from './useGetUserInfo'
import { APP_INDEX, LOGIN_URL, REGISTER_URL } from '@/router'

export default function useGetLoadingUserData() {
  const { username, nickname } = useGetUserInfo()
  const { loading, run } = useRequest(getUser, {
    manual: true,
    onSuccess(result) {
      const { username, nickname } = result

      dispatch(loginReducer({ username, nickname }))
    },
  })

  const { pathname } = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    if (username) return

    // 取消获取用户信息
    if ([LOGIN_URL, REGISTER_URL, APP_INDEX].includes(pathname)) return

    console.log([LOGIN_URL, REGISTER_URL, APP_INDEX])
    console.log(pathname)

    run()
  }, [username, pathname])

  return { loading, username, nickname }
}
