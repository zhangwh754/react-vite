import React, { FC } from 'react'
import { useParams } from 'react-router-dom'

type PropTypes = {}

const Edit: FC<PropTypes> = () => {
  const { id } = useParams()

  return (
    <>
      <div>Edit: {id}</div>
    </>
  )
}

export default Edit
