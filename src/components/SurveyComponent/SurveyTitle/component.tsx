import { Typography } from 'antd'
import { FC } from 'react'
import { defaultTitleProps, type SurveyTitleProps } from './interface'

const { Title } = Typography

const SurveyTitle: FC<SurveyTitleProps> = props => {
  const { title, level, isCenter } = { ...defaultTitleProps, ...props }

  return (
    <>
      <Title level={level} style={{ textAlign: isCenter ? 'center' : 'start', margin: 0 }}>
        {title}
      </Title>
    </>
  )
}

export default SurveyTitle
