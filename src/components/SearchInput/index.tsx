import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import { Input } from 'antd'
import styles from './style.module.scss'
import { SEARCH_KEYWORD } from '@/constant'

const { Search } = Input

type PropTypes = {}

const App: FC<PropTypes> = () => {
  const nav = useNavigate()
  const { pathname } = useLocation()
  const [searchParams] = useSearchParams()
  const [search, setSearch] = useState('')

  useEffect(() => {
    const searchVal = searchParams.get(SEARCH_KEYWORD) || ''
    setSearch(searchVal)
  }, [])

  const onSearch = (val: string) => {
    nav({
      pathname: pathname,
      search: `${SEARCH_KEYWORD}=${val}`,
    })
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <Search
        value={search}
        className={styles.search}
        placeholder="请输入"
        allowClear
        enterButton="搜索"
        onSearch={onSearch}
        onChange={onChange}
      ></Search>
    </>
  )
}

export default App
