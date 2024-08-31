import React, { ChangeEvent, FC, useState } from 'react'
import styles from './style.module.scss'
import { Button, Input, Space } from 'antd'
import {
  CheckOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  LeftOutlined,
  LockOutlined,
  SaveOutlined,
  UnlockOutlined,
} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import useGetSurveyDetailInfo from '@/hooks/useGetSurveyDetailInfo'
import { useDispatch } from 'react-redux'
import { setComponentHideStatus, setComponentLockStatus } from '@/store/component/componentReducer'

type PropTypes = {}

const EditHeader: FC<PropTypes> = () => {
  const [title, setTitle] = useState('问卷标题1')

  const { selectedComponent, selectedComponentId } = useGetSurveyDetailInfo()

  const { isHide = false, isLock = false } = selectedComponent || {}

  const nav = useNavigate()
  const dispatch = useDispatch()

  const onBlur = () => {
    console.log('currentTitle: ', title)
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value

    setTitle(val)
  }

  const onToggleLock = () => {
    dispatch(setComponentLockStatus({ id: selectedComponentId, isLock: !isLock }))
  }

  const onToggleHide = () => {
    dispatch(setComponentHideStatus({ id: selectedComponentId, isHide: !isHide }))
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
        <div className={styles.middle}>
          <Space>
            <Button
              shape="circle"
              disabled={selectedComponentId === ''}
              icon={isLock ? <UnlockOutlined /> : <LockOutlined />}
              onClick={onToggleLock}
            />
            <Button
              shape="circle"
              disabled={selectedComponentId === ''}
              icon={isHide ? <EyeOutlined /> : <EyeInvisibleOutlined />}
              onClick={onToggleHide}
            />
          </Space>
        </div>
        <div className={styles.right}>
          <Space>
            <Button icon={<CheckOutlined />}>发布</Button>
            <Button icon={<SaveOutlined />} type="primary">
              保存
            </Button>
          </Space>
        </div>
      </div>
    </>
  )
}

export default EditHeader
