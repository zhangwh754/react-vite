import { ChangeEvent, FC, useState } from 'react'
import styles from './style.module.scss'
import { Button, Input, message, Space, Tooltip } from 'antd'
import {
  CheckOutlined,
  CopyOutlined,
  DeleteOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  LeftOutlined,
  LockOutlined,
  SaveOutlined,
  SnippetsOutlined,
  UnlockOutlined,
} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import useGetSurveyDetailInfo from '@/hooks/useGetSurveyDetailInfo'
import { useDispatch } from 'react-redux'
import {
  setComponentCopy,
  setComponentDelete,
  setComponentHideStatus,
  setComponentLockStatus,
  setComponentPaste,
} from '@/store/component/componentReducer'

type PropTypes = {}

const EditHeader: FC<PropTypes> = () => {
  const [title, setTitle] = useState('问卷标题1')

  const { selectedComponent, selectedComponentId, copiedComponentData } = useGetSurveyDetailInfo()

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

  const onDelete = () => {
    dispatch(setComponentDelete())
  }

  const onCopy = () => {
    dispatch(setComponentCopy())
    message.success('复制成功')
  }

  const onPaste = () => {
    dispatch(setComponentPaste())
    message.success('粘贴成功')
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
            <Tooltip title={isLock ? '解锁' : '锁定'}>
              <Button
                shape="circle"
                disabled={selectedComponentId === ''}
                icon={isLock ? <UnlockOutlined /> : <LockOutlined />}
                onClick={onToggleLock}
              />
            </Tooltip>
            <Tooltip title={isHide ? '显示' : '隐藏'}>
              <Button
                shape="circle"
                disabled={selectedComponentId === ''}
                icon={isHide ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                onClick={onToggleHide}
              />
            </Tooltip>
            <Tooltip title="删除">
              <Button
                shape="circle"
                disabled={selectedComponentId === ''}
                icon={<DeleteOutlined />}
                onClick={onDelete}
              />
            </Tooltip>
            <Tooltip title="复制">
              <Button
                shape="circle"
                disabled={selectedComponentId === ''}
                icon={<CopyOutlined />}
                onClick={onCopy}
              />
            </Tooltip>
            <Tooltip title="粘贴">
              <Button
                shape="circle"
                disabled={!copiedComponentData}
                icon={<SnippetsOutlined />}
                onClick={onPaste}
              />
            </Tooltip>
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
