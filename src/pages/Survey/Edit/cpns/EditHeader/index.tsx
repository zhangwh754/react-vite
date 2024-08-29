import React, { ChangeEvent, FC, useState } from 'react'
import styles from './style.module.scss'
import { Input, Space } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

type PropTypes = {}

const EditHeader: FC<PropTypes> = () => {
  const [title, setTitle] = useState('问卷标题1')

  const nav = useNavigate()

  const onBlur = () => {
    console.log('currentTitle: ', title)
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value

    setTitle(val)
  }

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Space>
            <Space className={styles.back} onClick={() => nav(-1)}>
              <LeftOutlined />
              返回
            </Space>
            <Input
              className={styles.title}
              variant="borderless"
              value={title}
              onChange={onChange}
              onBlur={onBlur}
            />
          </Space>
        </div>
        <div className={styles.middle}></div>
        <div className={styles.right}></div>
      </div>
    </>
  )
}

export default EditHeader
