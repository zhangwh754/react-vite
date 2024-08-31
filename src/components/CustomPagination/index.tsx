import { FC, useEffect, useState } from 'react'
import { Pagination } from 'antd'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { SEARCH_PAGE, SEARCH_PAGESIZE } from '@/constant'

type PropTypes = {
  total: number
}

const CustomPagination: FC<PropTypes> = props => {
  const { total } = props

  const nav = useNavigate()
  const { pathname } = useLocation()
  const [searchParams] = useSearchParams()

  const [current, setCurrent] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  useEffect(() => {
    const current = Number(searchParams.get(SEARCH_PAGE)) || 1
    const pageSize = Number(searchParams.get(SEARCH_PAGESIZE)) || 10

    setCurrent(current)
    setPageSize(pageSize)
  }, [searchParams])

  const onChange = (page: number, pageSize: number) => {
    searchParams.set(SEARCH_PAGE, String(page))
    searchParams.set(SEARCH_PAGESIZE, String(pageSize))

    nav({
      pathname,
      search: searchParams.toString(),
    })
  }

  return (
    <>
      <Pagination
        style={{ marginTop: '28px' }}
        align="center"
        current={current}
        pageSize={pageSize}
        total={total}
        onChange={onChange}
      ></Pagination>
    </>
  )
}

export default CustomPagination
