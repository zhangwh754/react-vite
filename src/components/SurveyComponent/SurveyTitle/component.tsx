import { Typography } from 'antd'
import React, { FC } from 'react'
import { defaultTitleProps, type TitleProps } from './interface'

const { Title } = Typography

const SurveyTitle: FC<TitleProps> = props => {
  const { title, level, isCenter } = { ...defaultTitleProps, ...props }

  return (
    <>
      <Title level={level} style={{ textAlign: isCenter ? 'center' : 'start', marginBottom: 0 }}>
        {title}
      </Title>
    </>
  )
}

export default SurveyTitle
