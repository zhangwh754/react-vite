import React, { FC } from 'react'
import styles from './style.module.scss'
import classNames from 'classnames'

type PropTypes = {
  id: number
  title: string
  answerCount: number
  createTime: string
  isStar: boolean
  isPublish: boolean
}

const SurveyCard: FC<PropTypes> = props => {
  const { title, createTime, isStar, isPublish } = props

  return (
    <div className={styles['survey-card']}>
      <div className={styles.header}>
        <div className={styles.left}>{title}</div>
        <div className={styles.right}>
          <span className={classNames('time', { active: isPublish })}>
            {isPublish ? '已发布' : '未发布'}
          </span>
          <span>{createTime}</span>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <button>编辑问卷</button>
          <button>数据统计</button>
        </div>
        <div className={styles.right}>
          <button>{isStar ? '取消收藏' : '收藏'}</button>
          <button>删除</button>
        </div>
      </div>
    </div>
  )
}

export default SurveyCard
