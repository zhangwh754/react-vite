import { Form, Input, Select, Switch } from 'antd'
import React, { FC, useEffect } from 'react'
import { SurveyTitleProps } from './interface'

const PropView: FC<SurveyTitleProps> = prop => {
  const { title, isCenter, level, onChange } = prop

  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({ title, isCenter, level })
  }, [title, isCenter, level])

  const onAllFieldChange = (allFields: any[]) => {
    const values = allFields.map(item => {
      const name = item.name[0] as keyof SurveyTitleProps
      const value = item.value

      return { name, value }
    })

    const componentProps: SurveyTitleProps = {}

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
        autoComplete="off"
        onFieldsChange={(_, allFields) => {
          onAllFieldChange(allFields)
        }}
      >
        <Form.Item label="标题" name="title" rules={[{ required: true, message: '请输入标题' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="等级" name="level">
          <Select placeholder="请选择">
            <Select.Option value={1}>1级标题</Select.Option>
            <Select.Option value={2}>2级标题</Select.Option>
            <Select.Option value={3}>3级标题</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="居中" name="isCenter" valuePropName="checked">
          <Switch />
        </Form.Item>
      </Form>
    </>
  )
}

export default PropView
