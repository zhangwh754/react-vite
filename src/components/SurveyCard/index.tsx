import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Button, Space, Divider, Tag } from 'antd'
import { EditOutlined, BarChartOutlined, StarOutlined, DeleteOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import styles from './style.module.scss'

export type PropTypes = {
  id: number
  title: string
  answerCount: number
  createTime: string
  isStar: boolean
  isPublish: boolean
}

const SurveyCard: FC<PropTypes> = props => {
  const { title, createTime, isStar, isPublish, answerCount } = props

  return (
    <div className={styles['survey-card']}>
      <div className={styles.header}>
        <Space>
          {isStar && <StarOutlined style={{ color: '#f39c12' }} />}
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
          <Button icon={<EditOutlined />} type="default">
            编辑问卷
          </Button>
          <Button disabled={!isPublish} icon={<BarChartOutlined />} type="default">
            数据统计
          </Button>
        </Space>
        <Space>
          <Button
            icon={<StarOutlined style={{ color: isStar ? '#f39c12' : '#000' }} />}
            type="default"
          >
            {isStar ? '取消收藏' : '收藏'}
          </Button>
          <Button icon={<DeleteOutlined />} type="default" danger>
            删除
          </Button>
        </Space>
      </div>
    </div>
  )
}

export default SurveyCard
