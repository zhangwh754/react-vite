import React from 'react'
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom'

const MainLayout = React.lazy(() => import('@/layout/MainLayout'))
const ManageLayout = React.lazy(() => import('@/layout/ManageLayout'))
const QuestionLayout = React.lazy(() => import('@/layout/QuestionLayout'))

const Home = React.lazy(() => import('@/pages/Home'))
const Login = React.lazy(() => import('@/pages/Account/Login'))
const Register = React.lazy(() => import('@/pages/Account/Register'))
const List = React.lazy(() => import('@/pages/Manage/List'))
const Edit = React.lazy(() => import('@/pages/Survey/Edit'))
const NotFound = React.lazy(() => import('@/pages/NotFound'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'manage',
        element: <ManageLayout />,
        children: [
          {
            path: 'list',
            element: <List />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    path: 'question',
    element: <QuestionLayout />,
    children: [
      {
        path: 'edit',
        element: <Edit />,
      },
    ],
  },
]

const router = createBrowserRouter(routes)

const Routes: React.FC = () => {
  return <RouterProvider router={router} />
}

export default Routes
