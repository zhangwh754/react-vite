import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Space, Button, Typography } from 'antd'
import styles from './style.module.scss'
import { MANAGE_INDEX } from '@/router'

type PropTypes = {}

const { Title, Paragraph } = Typography

const Home: FC<PropTypes> = () => {
  const nav = useNavigate()

  return (
    <div className={styles.container}>
      <Space align="center" direction="vertical">
        <Title>慕问卷</Title>
        <Space>
          <Paragraph>问卷调查</Paragraph>
          <Paragraph>|</Paragraph>
          <Paragraph>问卷统计</Paragraph>
        </Space>
        <Button type="primary" onClick={() => nav(MANAGE_INDEX)}>
          开始使用
        </Button>
      </Space>
    </div>
  )
}

export default Home
