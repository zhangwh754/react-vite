import { Form, Input } from 'antd'
import React, { FC, useEffect } from 'react'
import { SurveyInputProps } from './interface'

const PropView: FC<SurveyInputProps> = prop => {
  const { title, placeholder } = prop

  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({ title, placeholder })
  }, [title, placeholder])

  return (
    <>
      <Form layout="vertical" form={form} labelAlign="left" autoComplete="off">
        <Form.Item label="标题" name="title" rules={[{ required: true, message: '请输入用户名' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="占位文字" name="placeholder">
          <Input />
        </Form.Item>
      </Form>
    </>
  )
}

export default PropView
