import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routesFromElement from './routes'

import '@assets/style.scss'

const routes = createBrowserRouter(routesFromElement)

const App = () => {
  return <RouterProvider router={routes} />
}

export default App
