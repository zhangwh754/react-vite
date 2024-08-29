import React, { FC } from 'react'
import { Space, Tabs, TabsProps, Typography } from 'antd'
import { useDispatch } from 'react-redux'
import { BarsOutlined, MenuOutlined } from '@ant-design/icons'
import { ComponentConfigType, componentListSortByType } from '@/components/SurveyComponent'
import styles from './style.module.scss'
import { setAppendNewComponent } from '@/store/component/componentReducer'
import { nanoid } from 'nanoid'

type PropTypes = {}

const { Title } = Typography

const SurveyComponentList: FC<PropTypes> = () => {
  const items: TabsProps['items'] = [
    {
      key: 'propsConfig',
      label: (
        <Space>
          <BarsOutlined />
          组件库
        </Space>
      ),
      children: componentListSortByType.map(t => {
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
      }),
    },
    {
      key: 'pageConfig',
      label: (
        <Space>
          <MenuOutlined />
          图层
        </Space>
      ),
      children: 'Content of Tab Pane 2',
    },
  ]

  const dispatch = useDispatch()

  const onAppendNewComponent = (component: ComponentConfigType) => {
    dispatch(
      setAppendNewComponent({
        id: nanoid(),
        title: `输入框`,
        componentType: component.type,
        props: component.defaultProps,
      })
    )
  }

  return (
    <>
      <Tabs defaultActiveKey="1" items={items} />
    </>
  )
}

export default SurveyComponentList
