import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

const List = React.lazy(() => import('@/pages/Manage/List'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <List />,
  },
])

export default router
