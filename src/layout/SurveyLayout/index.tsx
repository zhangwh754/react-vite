import { FC } from 'react'
import { Outlet } from 'react-router-dom'

type PropTypes = {}

const QuestionLayout: FC<PropTypes> = () => {
  return (
    <>
      <Outlet></Outlet>
    </>
  )
}

export default QuestionLayout
