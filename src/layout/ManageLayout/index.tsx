import React, { FC, Suspense } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { Space, Button, Divider, Skeleton } from 'antd'
import { BarChartOutlined, DeleteOutlined, PlusOutlined, StarOutlined } from '@ant-design/icons'
import { useRequest } from 'ahooks'
import styles from './style.module.scss'
import { MANAGE_INDEX, MANAGE_STAR, MANAGE_TRASH } from '@/router'
import { createNewSurvey } from '@/network'
import ToTop from '@/components/ToTop'

type PropTypes = {}

const ManageLayout: FC<PropTypes> = () => {
  const nav = useNavigate()
  const { pathname } = useLocation()

  const { run: onClickCreate, loading } = useRequest(createNewSurvey, {
    manual: true,
    onSuccess: res => {
      const { id } = res

      nav(`/question/edit/${id}`)
    },
  })

  return (
    <>
      <div className={styles['manage-layout']}>
        <Space className={styles['manage-panel']} align="end" direction="vertical">
          <Button disabled={loading} icon={<PlusOutlined />} type="primary" onClick={onClickCreate}>
            新建问卷
          </Button>
          <Divider />
          <Button
            type={pathname.includes('/manage/list') ? 'default' : 'text'}
            icon={<BarChartOutlined />}
            onClick={() => nav(MANAGE_INDEX)}
          >
            我的问卷
          </Button>
          <Button
            type={pathname.includes('/manage/star') ? 'default' : 'text'}
            icon={<StarOutlined />}
            onClick={() => nav(MANAGE_STAR)}
          >
            标星问卷
          </Button>
          <Button
            type={pathname.includes('/manage/trash') ? 'default' : 'text'}
            icon={<DeleteOutlined />}
            onClick={() => nav(MANAGE_TRASH)}
          >
            回收站
          </Button>
        </Space>
        <div className={styles['manage-content']}>
          <Suspense fallback={<Skeleton />}>
            <Outlet></Outlet>
          </Suspense>
        </div>
      </div>

      <ToTop />
    </>
  )
}

export default ManageLayout
