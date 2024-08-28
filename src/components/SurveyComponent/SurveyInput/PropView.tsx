import { Form, Input } from 'antd'
import React, { FC, useEffect } from 'react'
import { SurveyInputProps } from './interface'

const PropView: FC<SurveyInputProps> = prop => {
  const { title, placeholder, onChange } = prop

  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({ title, placeholder })
  }, [title, placeholder])

  const onAllFieldChange = (allFields: any[]) => {
    const values = allFields.map(item => {
      const name = item.name[0] as keyof SurveyInputProps
      const value = item.value

      return { name, value }
    })

    const componentProps: SurveyInputProps = {}

    values.forEach(item => (componentProps[item.name] = item.value))

    if (onChange) {
      onChange(componentProps)
    }
  }

  return (
    <>
      <Form
        layout="vertical"
        form={form}
        labelAlign="left"
        autoComplete="off"
        onFieldsChange={(_, allFields) => {
          onAllFieldChange(allFields)
        }}
      >
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
