import { FC, useEffect } from 'react'
import { Form, Input, Select, Switch } from 'antd'
import { SurveyTitleProps } from './interface'

const PropView: FC<SurveyTitleProps> = prop => {
  const { title, isCenter, level, onChange, lock } = prop

  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({ title, isCenter, level })
  }, [title, isCenter, level, form])

  const onAllFieldChange = () => {
    if (onChange) {
      onChange(form.getFieldsValue())
    }
  }

  return (
    <>
      <Form
        layout="vertical"
        form={form}
        autoComplete="off"
        disabled={lock}
        onFieldsChange={onAllFieldChange}
      >
        <Form.Item label="标题" name="title" rules={[{ required: true, message: '请输入标题' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="等级" name="level">
          <Select placeholder="请选择">
            <Select.Option value={1}>1级</Select.Option>
            <Select.Option value={2}>2级</Select.Option>
            <Select.Option value={3}>3级</Select.Option>
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
