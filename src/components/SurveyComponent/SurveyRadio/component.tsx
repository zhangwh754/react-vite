import { FC } from 'react'
import { Radio, Space, Typography } from 'antd'
import { defaultRadioProps, type SurveyRadioProps } from './interface'

const { Paragraph } = Typography

const SurveyRadio: FC<SurveyRadioProps> = props => {
  const { title, isVertical, options = [], defaultValue } = { ...defaultRadioProps, ...props }

  return (
    <>
      <Paragraph strong>{title}</Paragraph>

      <Radio.Group value={defaultValue}>
        <Space direction={isVertical ? 'vertical' : 'horizontal'}>
          {options.map(option => (
            <Radio key={option.value} value={option.value}>
              {option.label}
            </Radio>
          ))}
        </Space>
      </Radio.Group>
    </>
  )
}

export default SurveyRadio
