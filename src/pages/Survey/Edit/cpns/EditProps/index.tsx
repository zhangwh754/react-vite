import { FC, useEffect, useState } from 'react'
import { Tabs, TabsProps, Space, Typography, Form, Input } from 'antd'
import { FormOutlined, SettingOutlined } from '@ant-design/icons'
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

  const { componentType, props, isLock, isHide } = selectedComponent

  const { PropView } = getComponentConfigByType(componentType)

  const onPropViewChange = (props: ComponentPropsType) => {
    dispatch(setSelectedComponentProps({ id: selectedComponentId, props: props }))
  }

  return <PropView {...props} lock={isLock || isHide} onChange={onPropViewChange}></PropView>
}

const PagesConfig: FC = () => {
  return (
    <Form layout="vertical" autoComplete="off">
      <Form.Item label="标题" name="title" rules={[{ required: true, message: '请输入标题' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="描述" name="desc">
        <Input />
      </Form.Item>
    </Form>
  )
}

const EditProps: FC<PropTypes> = () => {
  const [activeKey, setActiveKey] = useState('propsConfig')

  const { selectedComponentId } = useGetSurveyDetailInfo()

  useEffect(() => {
    if (!selectedComponentId) {
      setActiveKey('pageConfig')
    } else {
      setActiveKey('propsConfig')
    }
  }, [selectedComponentId])

  const onTabsChange = (val: string) => {
    setActiveKey(val)
  }

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
      children: <PagesConfig />,
    },
  ]

  return (
    <>
      <Tabs activeKey={activeKey} items={items} onChange={onTabsChange} />
    </>
  )
}

export default EditProps
