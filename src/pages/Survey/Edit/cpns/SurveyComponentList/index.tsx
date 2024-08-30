import React, { FC } from 'react'
import { Button, Space, Tabs, TabsProps, Typography } from 'antd'
import { useDispatch } from 'react-redux'
import { BarsOutlined, EyeInvisibleOutlined, LockOutlined, MenuOutlined } from '@ant-design/icons'
import { ComponentConfigType, componentListSortByType } from '@/components/SurveyComponent'
import styles from './style.module.scss'
import { setAppendNewComponent } from '@/store/component/componentReducer'
import { nanoid } from 'nanoid'
import useGetSurveyDetailInfo from '@/hooks/useGetSurveyDetailInfo'

type PropTypes = {}

const { Title } = Typography

const SurveyComponentList: FC<PropTypes> = () => {
  const { componentsList } = useGetSurveyDetailInfo()

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
      children: componentsList.map(item => {
        return (
          <div className={styles['component-row']} key={item.id}>
            <div className={styles['component-name']}>{item.title}</div>
            <div className={styles['component-buttons']}>
              <Space>
                <Button shape="circle" size="small" icon={<LockOutlined />} />
                <Button shape="circle" size="small" icon={<EyeInvisibleOutlined />} />
              </Space>
            </div>
          </div>
        )
      }),
    },
  ]

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

  return (
    <>
      <Tabs defaultActiveKey="1" items={items} />
    </>
  )
}

export default SurveyComponentList
