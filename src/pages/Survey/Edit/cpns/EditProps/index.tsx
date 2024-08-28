import React, { FC } from 'react'
import { Tabs, TabsProps, Space, Typography } from 'antd'
import { FormOutlined, SettingOutlined } from '@ant-design/icons'
import styles from './style.module.scss'
import useGetSurveyDetailInfo from '@/hooks/useGetSurveyDetailInfo'
import { ComponentPropsType, getComponentConfigByType } from '@/components/SurveyComponent'
import { useDispatch } from 'react-redux'
import { setSelectedComponentProps } from '@/store/component/componentReducer'

const { Title } = Typography

type PropTypes = {}

const NullProps: FC = () => {
  return (
    <Title level={3} style={{ margin: 0, fontSize: '18px' }}>
      未选中任何组件
    </Title>
  )
}

const ComponentProp: FC = () => {
  const dispatch = useDispatch()

  const { selectedComponent, selectedComponentId } = useGetSurveyDetailInfo()

  if (!selectedComponent) return <NullProps />

  const { componentType, props } = selectedComponent

  const { PropView } = getComponentConfigByType(componentType)

  const onPropViewChange = (props: ComponentPropsType) => {
    dispatch(setSelectedComponentProps({ id: selectedComponentId, props: props }))
  }

  return <PropView {...props} onChange={onPropViewChange}></PropView>
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
