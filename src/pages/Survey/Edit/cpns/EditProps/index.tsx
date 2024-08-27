import React, { FC } from 'react'
import { Tabs, TabsProps, Space, Typography } from 'antd'
import { FormOutlined, SettingOutlined } from '@ant-design/icons'
import styles from './style.module.scss'
import useGetSurveyDetailInfo from '@/hooks/useGetSurveyDetailInfo'
import { getComponentConfigByType } from '@/components/SurveyComponent'

type PropTypes = {}

const { Title } = Typography

const NullProps: FC = () => {
  return (
    <Title level={3} style={{ margin: 0, fontSize: '18px' }}>
      未选中任何组件
    </Title>
  )
}

const ComponentProp: FC = () => {
  const { selectedComponent } = useGetSurveyDetailInfo()

  if (!selectedComponent) return <NullProps />

  const { componentType, props } = selectedComponent

  const { PropView } = getComponentConfigByType(componentType)

  return <PropView {...props}></PropView>
}

const EditProps: FC<PropTypes> = () => {
  const items: TabsProps['items'] = [
    {
      key: 'propsConfig',
      label: (
        <Space>
          <FormOutlined />
          组件设置
        </Space>
      ),
      children: <ComponentProp />,
    },
    {
      key: 'pageConfig',
      label: (
        <Space>
          <SettingOutlined />
          页面设置
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

export default EditProps
