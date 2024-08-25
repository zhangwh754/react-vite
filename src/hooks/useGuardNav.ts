import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { APP_INDEX, LOGIN_URL, MANAGE_INDEX, REGISTER_URL } from '@/router'
import useGetLoadingUserData from './useGetLoadingUserData'

export default function useGuardNav() {
  const { pathname } = useLocation()
  const { loading, username } = useGetLoadingUserData()
  const nav = useNavigate()

  useEffect(() => {
    if (loading) return

    // 取消重复登录
    if ([LOGIN_URL, REGISTER_URL].includes(pathname)) {
      if (username) {
        nav(MANAGE_INDEX)
      }
    }
    // 未登录拦截
    else if (![APP_INDEX].includes(pathname)) {
      if (!username) {
        nav(LOGIN_URL)
      }
    }
  }, [pathname, username])
}
