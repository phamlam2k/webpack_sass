import { createBrowserRouter } from 'react-router-dom'

import RootLayout from '@layout/RootLayout'
import { lazy } from 'react'
const LoginLazyPage = lazy(
  () => import(/* webpackChunkName: "login" */ '@components/pages/Login')
)

const DashboardLazyPage = lazy(
  () =>
    import(
      /* webpackChunkName: "dashboard" */ '@components/pages/Dashboard/index'
    )
)

const routesFromElement = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <DashboardLazyPage />
      },
      {
        path: 'login',
        element: <LoginLazyPage />
      }
    ]
  }
])

export default routesFromElement
