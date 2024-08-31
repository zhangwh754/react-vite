import React, { FC } from 'react'
import { Typography } from 'antd'
import { defaultParagraphProps, type SurveyParagraphProps } from './interface'

const { Paragraph } = Typography

const SurveyParagraph: FC<SurveyParagraphProps> = props => {
  const { content } = { ...defaultParagraphProps, ...props }

  return (
    <>
      <Paragraph style={{ fontSize: '16px', whiteSpace: 'pre-wrap' }}>
        {content?.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </Paragraph>
    </>
  )
}

export default SurveyParagraph
