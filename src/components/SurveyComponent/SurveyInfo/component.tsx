import { FC } from 'react'
import { Typography } from 'antd'
import { defaultInfoProps, type SurveyInfoProps } from './interface'

const { Title, Paragraph } = Typography

const SurveyInfo: FC<SurveyInfoProps> = props => {
  const { title, isCenter, desc } = { ...defaultInfoProps, ...props }

  return (
    <>
      <Title level={1} style={{ textAlign: isCenter ? 'center' : 'start', margin: '0 0 10px' }}>
        {title}
      </Title>
      {desc && (
        <Paragraph style={{ textAlign: isCenter ? 'center' : 'start', margin: 0 }}>
          {desc}
        </Paragraph>
      )}
    </>
  )
}

export default SurveyInfo
