import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import View from './components/View.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />
  },
  {
    path:'/view/:id',
    element:<View />
  }
])
createRoot(document.getElementById('root')).render(
   <RouterProvider router={router} />
)
