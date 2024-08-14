import React from 'react'
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom'

const Home = React.lazy(() => import('@/pages/Home'))
const Login = React.lazy(() => import('@/pages/Account/Login'))
const Register = React.lazy(() => import('@/pages/Account/Register'))
const List = React.lazy(() => import('@/pages/Manage/List'))
const Edit = React.lazy(() => import('@/pages/Survey/Edit'))
const NotFound = React.lazy(() => import('@/pages/NotFound'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/list',
    element: <List />,
  },
  {
    path: '/edit',
    element: <Edit />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

const router = createBrowserRouter(routes)

const Routes: React.FC = () => {
  return <RouterProvider router={router} />
}

export default Routes
