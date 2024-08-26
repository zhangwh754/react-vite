import React, { FC } from 'react'
import { Input, Typography } from 'antd'
import { defaultInputProps, type InputProps } from './interface'

const { Paragraph } = Typography

const SurveyInput: FC<InputProps> = props => {
  const { title, placeholder } = { ...defaultInputProps, ...props }

  return (
    <>
      <Paragraph>{title}</Paragraph>
      <Input placeholder={placeholder}></Input>
    </>
  )
}

export default SurveyInput
