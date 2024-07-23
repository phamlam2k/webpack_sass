import { createRoutesFromElements, Route } from 'react-router-dom'

import LoginPage from '@components/pages/Login'
import DashboardPage from '@components/pages/Dashboard'
import RootLayout from '@layout/RootLayout'

const routesFromElement = createRoutesFromElements(
  <Route path='/' element={<RootLayout />}>
    <Route path='' element={<DashboardPage />} />

    <Route path='login' element={<LoginPage />} />
  </Route>
)

export default routesFromElement
