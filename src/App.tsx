import { RouterProvider } from 'react-router-dom'

import '@assets/style.scss'
import routesFromElement from './routes'

const App = () => {
  return <RouterProvider router={routesFromElement} />
}

export default App
