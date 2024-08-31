import { FC } from 'react'
import { Checkbox, Space, Typography } from 'antd'
import { defaultCheckboxProps, type SurveyCheckboxProps } from './interface'

const { Paragraph } = Typography

const SurveyCheckbox: FC<SurveyCheckboxProps> = props => {
  const {
    title,
    isVertical,
    options = [],
    defaultValue = [],
  } = { ...defaultCheckboxProps, ...props }

  return (
    <>
      <Paragraph strong>{title}</Paragraph>

      <Checkbox.Group value={defaultValue}>
        <Space direction={isVertical ? 'vertical' : 'horizontal'}>
          {options.map(option => (
            <Checkbox key={option.value} value={option.value}>
              {option.label}
            </Checkbox>
          ))}
        </Space>
      </Checkbox.Group>
    </>
  )
}

export default SurveyCheckbox
