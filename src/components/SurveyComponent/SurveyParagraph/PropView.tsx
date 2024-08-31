import { FC, useEffect } from 'react'
import { Form, Input } from 'antd'
import { SurveyParagraphProps } from './interface'

const PropView: FC<SurveyParagraphProps> = prop => {
  const { content, onChange, lock } = prop

  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({ content })
  }, [content, form])

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
        <Form.Item label="内容" name="content" rules={[{ required: true, message: '请输入内容' }]}>
          <Input.TextArea />
        </Form.Item>
      </Form>
    </>
  )
}

export default PropView
