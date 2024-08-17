import React, { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Space, Typography, Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import styles from './style.module.scss'
import { REGISTER_URL } from '@/router'

type PropTypes = {}

const { Title } = Typography

const USERNAME_KEY = `login_username`
const PASSWORD_KEY = `login_password`

const rememberUserInfo = ({ username, password }: { username: string; password: string }) => {
  localStorage.setItem(USERNAME_KEY, username)
  localStorage.setItem(PASSWORD_KEY, password)
}
const forgetUserInfo = () => {
  localStorage.removeItem(USERNAME_KEY)
  localStorage.removeItem(PASSWORD_KEY)
}
const getUserInfoFromLocal = () => {
  return {
    username: localStorage.getItem(USERNAME_KEY) || '',
    password: localStorage.getItem(PASSWORD_KEY) || '',
  }
}

const Login: FC<PropTypes> = () => {
  const [form] = Form.useForm()

  useEffect(() => {
    const userinfo = getUserInfoFromLocal()
    form.setFieldsValue({ username: userinfo.username, password: userinfo.password })
  }, [])

  const onFinish = (e: any) => {
    const { remember, username, password } = e

    if (remember) {
      rememberUserInfo({ username, password })
    } else {
      forgetUserInfo()
    }
  }

  return (
    <>
      <div className={styles.container}>
        <Space>
          <Title level={3}>
            <UserOutlined />
          </Title>
          <Title level={3}>用户登录</Title>
        </Space>

        <Form
          form={form}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          style={{ width: 350 }}
          initialValues={{ remember: true }}
          labelAlign="left"
          autoComplete="off"
          onFinish={onFinish}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              { required: true, message: '请输入用户名' },
              {
                type: 'string',
                max: 10,
                min: 5,
                message: '用户名长度为5-10',
              },
              {
                pattern: /^[a-zA-Z0-9_-]+$/,
                message: '用户名只能包含字母、数字、下划线',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[
              { required: true, message: '请输入密码' },
              {
                type: 'string',
                max: 20,
                min: 6,
                message: '密码长度为6-20',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 6, span: 16 }}>
            <Checkbox>记住我</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
              <Link style={{ color: '#2e86c1', marginLeft: '32px' }} to={REGISTER_URL}>
                新用户注册
              </Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}

export default Login
