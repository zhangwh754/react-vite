import React, { FC, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Space, Typography, Form, Input, Button, message } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import styles from './style.module.scss'
import { LOGIN_URL } from '@/router'

type PropTypes = {}

const { Title } = Typography

const Login: FC<PropTypes> = () => {
  const nav = useNavigate()

  const onFinish = (e: any) => {
    const { username, password } = e

    message.success('注册成功')

    nav(LOGIN_URL)
  }

  return (
    <>
      <div className={styles.container}>
        <Space>
          <Title level={3}>
            <UserOutlined />
          </Title>
          <Title level={3}>用户注册</Title>
        </Space>

        <Form
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
          <Form.Item
            label="确认密码"
            name="confirmPassword"
            dependencies={['password']}
            hasFeedback
            rules={[
              { required: true, message: '请重新输入密码' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error('确认密码与输入的密码不符'))
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                注册
              </Button>
              <Link style={{ color: '#2e86c1', marginLeft: '32px' }} to={LOGIN_URL}>
                去登录
              </Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}

export default Login
