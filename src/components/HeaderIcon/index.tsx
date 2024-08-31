import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Space, Typography } from 'antd'
import { FormOutlined } from '@ant-design/icons'
import styles from './style.module.scss'
import { APP_INDEX } from '@/router'

type PropTypes = {}

const { Title } = Typography

const HeaderIcon: FC<PropTypes> = () => {
  return (
    <Link className={styles.link} to={APP_INDEX}>
      <Space className={styles.container}>
        <FormOutlined className={styles.icon} />
        <Title level={3} className={styles.title}>
          慕问卷
        </Title>
      </Space>
    </Link>
  )
}

export default HeaderIcon
