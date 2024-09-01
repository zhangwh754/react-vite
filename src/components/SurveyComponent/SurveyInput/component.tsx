import { FC } from 'react'
import { Input, Typography } from 'antd'
import { defaultInputProps, type SurveyInputProps } from './interface'

const { Paragraph } = Typography

const SurveyInput: FC<SurveyInputProps> = props => {
  const { title, placeholder } = { ...defaultInputProps, ...props }

  return (
    <>
      <Paragraph strong>{title}</Paragraph>
      <Input placeholder={placeholder}></Input>
    </>
  )
}

export default SurveyInput
