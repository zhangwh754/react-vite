import React from 'react'
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom'

const MainLayout = React.lazy(() => import('@/layout/MainLayout'))
const ManageLayout = React.lazy(() => import('@/layout/ManageLayout'))
const SurveyLayout = React.lazy(() => import('@/layout/SurveyLayout'))

const Home = React.lazy(() => import('@/pages/Home'))
const Login = React.lazy(() => import('@/pages/Account/Login'))
const Register = React.lazy(() => import('@/pages/Account/Register'))
const List = React.lazy(() => import('@/pages/Manage/List'))
const Star = React.lazy(() => import('@/pages/Manage/Star'))
const Trash = React.lazy(() => import('@/pages/Manage/Trash'))
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
          {
            path: 'star',
            element: <Star />,
          },
          {
            path: 'trash',
            element: <Trash />,
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
    element: <SurveyLayout />,
    children: [
      {
        path: 'edit/:id',
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

export const APP_INDEX = '/'
export const MANAGE_INDEX = '/manage/list'
export const MANAGE_STAR = '/manage/star'
export const MANAGE_TRASH = '/manage/trash'
export const LOGIN_URL = '/login'
export const REGISTER_URL = '/register'
