import { Empty, Result, Spin } from 'antd'
import React, { FC } from 'react'

type PropTypes = {
  loading: boolean
  empty?: boolean
  error?: string
}

const LoadingIndicator: FC<PropTypes> = props => {
  const { loading, empty = false, error = '' } = props

  return (
    <>
      {loading && (
        <Spin
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}
          size="large"
        />
      )}

      {!loading && empty && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="暂无数据" />}

      {error && <Result status="error" title={error} />}
    </>
  )
}

export default LoadingIndicator
