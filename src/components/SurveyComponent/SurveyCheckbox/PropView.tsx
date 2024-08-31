import { FC, useEffect } from 'react'
import { Button, Form, Input, Select, Space, Switch, Typography } from 'antd'
import { SurveyCheckboxProps } from './interface'
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons'

const { Paragraph } = Typography

const PropView: FC<SurveyCheckboxProps> = prop => {
  const { title = '', options = [], defaultValue = [], isVertical = false, onChange, lock } = prop

  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({ title, options, defaultValue, isVertical })
  }, [title, options, defaultValue, isVertical, form])

  const onAllFieldChange = () => {
    if (onChange) {
      const values = form.getFieldsValue() as SurveyCheckboxProps

      values.options = values
        .options!.filter(option => option.label != null)
        .map(option => ({
          label: option.label,
          value: option.label,
        }))

      onChange(values)
    }
  }

  return (
    <>
      <Form
        layout="vertical"
        form={form}
        labelAlign="left"
        autoComplete="off"
        disabled={lock}
        onFieldsChange={onAllFieldChange}
      >
        <Form.Item label="标题" name="title" rules={[{ required: true, message: '请输入标题' }]}>
          <Input />
        </Form.Item>
        <Paragraph strong>选项</Paragraph>
        <Form.List name="options">
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field, index) => {
                const { key, name } = field

                return (
                  <Space key={key} align="baseline">
                    <Form.Item
                      {...field}
                      name={[name, 'label']}
                      dependencies={['options']}
                      rules={[
                        {
                          validator(_, text: string) {
                            const { options = [] } = form.getFieldsValue() as SurveyCheckboxProps

                            let repeatCount = 0

                            for (let i = 0; i < options.length; i++) {
                              if (text === options[i].label) {
                                repeatCount += 1
                              }
                            }

                            if (repeatCount > 1) {
                              return Promise.reject(new Error('选项不可重复'))
                            }
                            return Promise.resolve()
                          },
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    {index > 1 && <DeleteOutlined onClick={() => remove(index)} />}
                  </Space>
                )
              })}
              <Form.ErrorList errors={errors} />
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add({ label: '', value: '' })}
                  style={{ width: '60%' }}
                  icon={<PlusOutlined />}
                >
                  Add field
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item label="默认值" name="defaultValue">
          <Select mode="multiple" allowClear>
            {options.map(option => (
              <Select.Option key={option.value} value={option.value}>
                {option.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="竖向排列" name="isVertical">
          <Switch />
        </Form.Item>
      </Form>
    </>
  )
}

export default PropView
