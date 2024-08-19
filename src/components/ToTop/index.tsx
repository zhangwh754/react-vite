import React, { FC } from 'react'
import { FloatButton } from 'antd'

type PropTypes = {}

const ToTop: FC<PropTypes> = () => {
  return (
    <>
      <FloatButton.Group
        shape="square"
        style={{ marginRight: 30, marginBottom: 30, boxShadow: 'initial' }}
      >
        <FloatButton.BackTop visibilityHeight={800} />
      </FloatButton.Group>
    </>
  )
}

export default ToTop
