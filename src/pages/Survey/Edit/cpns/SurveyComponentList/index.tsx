import React, { FC } from 'react'
import { Space, Tabs, TabsProps, Typography } from 'antd'
import { BarsOutlined, MenuOutlined } from '@ant-design/icons'
import { componentListSortByType } from '@/components/SurveyComponent'
import styles from './style.module.scss'

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
                <div key={type} className={styles['canvas-row']}>
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

  return (
    <>
      <Tabs defaultActiveKey="1" items={items} />
    </>
  )
}

export default SurveyComponentList
