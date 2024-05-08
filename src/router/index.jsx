import { createBrowserRouter } from 'react-router-dom'

import App from '../App.jsx'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup.jsx'

import Forum from '../pages/Forum/Forum.jsx'
import Layout from '../layouts/Layout/Layout.jsx'
import Home from '../pages/Home/Home.jsx'
import Edit from '../pages/Edit_profile/Edit_profile.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/landing',
        element: <App />
      },
      {
        path: '/forums',
        element: <Home />
      },
      {
        path: '/forum/:forumId',
        element: <Forum />
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/edit',
        element: <Edit />,
      },
      {
        path: '/Friends',
        element: <h1></h1>,
      }
    ]
},
])

export default router