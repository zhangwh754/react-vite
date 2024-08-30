import React, { FC, useEffect } from 'react'
import { Form, Input, Switch } from 'antd'
import { SurveyInfoProps } from './interface'

const PropView: FC<SurveyInfoProps> = prop => {
  const { title, isCenter, desc, onChange } = prop

  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({ title, isCenter, desc })
  }, [title, isCenter, desc, form])

  const onAllFieldChange = () => {
    if (onChange) {
      onChange(form.getFieldsValue())
    }
  }

  return (
    <>
      <Form layout="vertical" form={form} autoComplete="off" onFieldsChange={onAllFieldChange}>
        <Form.Item label="标题" name="title" rules={[{ required: true, message: '请输入标题' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="描述" name="desc">
          <Input />
        </Form.Item>
        <Form.Item label="居中" name="isCenter" valuePropName="checked">
          <Switch />
        </Form.Item>
      </Form>
    </>
  )
}

export default PropView
