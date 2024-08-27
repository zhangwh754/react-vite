import { Form, Input } from 'antd'
import React, { FC, useEffect } from 'react'
import { SurveyTitleProps } from './interface'

const PropView: FC<SurveyTitleProps> = prop => {
  const { title } = prop

  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({ title })
  }, [title])

  return (
    <>
      <Form layout="vertical" form={form} autoComplete="off">
        <Form.Item label="标题" name="title" rules={[{ required: true, message: '请输入标题' }]}>
          <Input />
        </Form.Item>
      </Form>
    </>
  )
}

export default PropView
