import { FC } from 'react'
import { Checkbox, Space, Typography } from 'antd'
import { defaultCheckboxProps, type SurveyCheckboxProps } from './interface'

const { Paragraph } = Typography

const SurveyCheckbox: FC<SurveyCheckboxProps> = props => {
  const { title, isVertical, options = [] } = { ...defaultCheckboxProps, ...props }

  return (
    <>
      <Paragraph strong>{title}</Paragraph>

      <Space direction={isVertical ? 'vertical' : 'horizontal'}>
        {options.map(({ value, label, checked }) => (
          <Checkbox key={value} value={value} checked={checked}>
            {label}
          </Checkbox>
        ))}
      </Space>
    </>
  )
}

export default SurveyCheckbox
