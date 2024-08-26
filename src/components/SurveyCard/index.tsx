import React, { FC, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Space, Divider, Tag, message } from 'antd'
import { EditOutlined, BarChartOutlined, StarOutlined, DeleteOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import styles from './style.module.scss'
import { useRequest } from 'ahooks'
import { updateSurveyData } from '@/network'

export type PropTypes = {
  id: string
  title: string
  answerCount: number
  createTime: string
  isStar: boolean
  isPublish: boolean
  isDelete: boolean
}

const SurveyCard: FC<PropTypes> = props => {
  const { id, title, createTime, isStar, isPublish, answerCount, isDelete } = props

  const nav = useNavigate()

  // 收藏逻辑
  const [starState, setStarState] = useState(isStar)

  const { run: star, loading: starLoading } = useRequest(
    async id => await updateSurveyData(id, { isStar: !starState }),
    {
      manual: true,
      onSuccess() {
        message.success('修改成功')

        setStarState(!starState)
      },
    }
  )

  // 删除逻辑
  const [deleteState, setDeleteState] = useState(isDelete)

  const { run: remove, loading: deleteLoading } = useRequest(
    async id => await updateSurveyData(id, { isDelete: !deleteState }),
    {
      manual: true,
      onSuccess() {
        message.success('删除成功')

        setDeleteState(!deleteState)
      },
    }
  )

  return (
    !deleteState && (
      <div className={styles['survey-card']}>
        <div className={styles.header}>
          <Space>
            {starState && <StarOutlined style={{ color: '#f39c12' }} />}
            <Link style={{ color: '#3498db' }} to={'/'}>
              {title}
            </Link>
          </Space>
          <Space size="middle">
            {isPublish && <span>答卷人数: {answerCount}人</span>}
            <span className={classNames('time', { active: isPublish })}>
              {isPublish ? <Tag color="green">已发布</Tag> : <Tag color="purple">未发布</Tag>}
            </span>
            <span>{createTime}</span>
          </Space>
        </div>
        <Divider style={{ margin: '15px auto 10px' }} />
        <div className={styles.content}>
          <Space>
            <Button
              icon={<EditOutlined />}
              type="default"
              onClick={() =>
                nav({
                  pathname: `/question/edit/${id}`,
                })
              }
            >
              编辑问卷
            </Button>
            <Button disabled={!isPublish} icon={<BarChartOutlined />} type="default">
              数据统计
            </Button>
          </Space>
          <Space>
            <Button
              disabled={starLoading}
              icon={<StarOutlined style={{ color: starState ? '#f39c12' : '#000' }} />}
              type="default"
              onClick={() => star(id)}
            >
              {starState ? '取消收藏' : '收藏'}
            </Button>
            <Button
              disabled={deleteLoading}
              icon={<DeleteOutlined />}
              type="default"
              danger
              onClick={() => remove(id)}
            >
              删除
            </Button>
          </Space>
        </div>
      </div>
    )
  )
}

export default SurveyCard
