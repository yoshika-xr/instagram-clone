import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import View from './components/View.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Profile from './components/Profile.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />
  },
  {
    path:'/view/:id/:tot',
    element:<View />
  },
  {
    path:'/profile',
    element:<Profile/>
  }
])
createRoot(document.getElementById('root')).render(
   <RouterProvider router={router} />
)
