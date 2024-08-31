import { FC, MouseEvent } from 'react'
import { Button, Space, Tabs, TabsProps, Typography } from 'antd'
import { useDispatch } from 'react-redux'
import {
  BarsOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  LockOutlined,
  MenuOutlined,
  UnlockOutlined,
} from '@ant-design/icons'
import { ComponentConfigType, componentListSortByType } from '@/components/SurveyComponent'
import styles from './style.module.scss'
import {
  ComponentType,
  setAppendNewComponent,
  setComponentHideStatus,
  setComponentLockStatus,
  setSelectedComponentId,
} from '@/store/component/componentReducer'
import { nanoid } from 'nanoid'
import useGetSurveyDetailInfo from '@/hooks/useGetSurveyDetailInfo'
import classNames from 'classnames'

type PropTypes = {}

const { Title } = Typography

// 组件库
const DisplayComponentList: FC = () => {
  const dispatch = useDispatch()

  const onAppendNewComponent = (component: ComponentConfigType) => {
    dispatch(
      setAppendNewComponent({
        id: nanoid(),
        title: component.title,
        componentType: component.type,
        props: component.defaultProps,
      })
    )
  }

  return componentListSortByType.map(t => {
    return (
      <div key={t.id}>
        <Title level={3} style={{ fontSize: '16px' }}>
          {t.title}
        </Title>

        {t.components.map(c => {
          const { Component, defaultProps, type } = c

          return (
            <div
              key={type}
              className={styles['canvas-row']}
              onClick={() => onAppendNewComponent(c)}
            >
              <div className={styles['canvas-item']}>
                <Component {...defaultProps}></Component>
              </div>
            </div>
          )
        })}
      </div>
    )
  })
}

// 图层组件配置
const ConfigComponentList: FC<{ componentsList: ComponentType[]; selectedComponentId: string }> = ({
  componentsList,
  selectedComponentId,
}) => {
  const dispatch = useDispatch()

  const onToggleLock = (e: MouseEvent, id: string, isLock: boolean) => {
    e.stopPropagation()

    dispatch(setComponentLockStatus({ id, isLock }))
  }

  const onToggleHide = (e: MouseEvent, id: string, isHide: boolean) => {
    e.stopPropagation()

    dispatch(setComponentHideStatus({ id, isHide }))
  }

  return componentsList.map(item => {
    const { id, title, isLock, isHide } = item

    const isActive = selectedComponentId === id

    return (
      <div
        className={classNames({
          [styles['component-row']]: true,
          [styles['active']]: isActive,
        })}
        key={id}
        onClick={() => dispatch(setSelectedComponentId(id))}
      >
        <div className={styles['component-name']}>{title}</div>
        <div className={styles['component-buttons']}>
          <Space>
            <Button
              shape="circle"
              size="small"
              icon={isLock ? <UnlockOutlined /> : <LockOutlined />}
              onClick={e => onToggleLock(e, id, !isLock)}
            />
            <Button
              shape="circle"
              size="small"
              icon={isHide ? <EyeOutlined /> : <EyeInvisibleOutlined />}
              onClick={e => onToggleHide(e, id, !isHide)}
            />
          </Space>
        </div>
      </div>
    )
  })
}

const SurveyComponentList: FC<PropTypes> = () => {
  const { componentsList, selectedComponentId } = useGetSurveyDetailInfo()

  const items: TabsProps['items'] = [
    {
      key: 'propsConfig',
      label: (
        <Space>
          <BarsOutlined />
          组件库
        </Space>
      ),
      children: <DisplayComponentList />,
    },
    {
      key: 'pageConfig',
      label: (
        <Space>
          <MenuOutlined />
          图层
        </Space>
      ),
      children: (
        <ConfigComponentList
          componentsList={componentsList}
          selectedComponentId={selectedComponentId}
        />
      ),
    },
  ]

  return (
    <>
      <Tabs defaultActiveKey="propsConfig" items={items} />
    </>
  )
}

export default SurveyComponentList
