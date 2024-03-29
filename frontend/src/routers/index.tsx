import { createBrowserRouter } from 'react-router-dom'

import Login from '../containers/auth/login'
import { Register } from '../containers/auth/register'
import { SucessRegister } from '../containers/auth/sucessRegister'
import Home from '../containers/home'
import { ForgotPassword } from '../containers/auth/forgotPassword'
import { SucessForgotPassword } from '../containers/auth/successForgotPassword'
import { ResetPassword } from '../containers/auth/resetPassword'
import Profile from '../containers/profile'
import Tearch from '../containers/tearch'
import ListTearches from '../containers/listTearches'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/success-register',
    element: <SucessRegister />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />
  },
  {
    path: '/success-forgot-password',
    element: <SucessForgotPassword />
  },
  {
    path: '/reset-password',
    element: <ResetPassword />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/tearch',
    element: <Tearch />
  },
  {
    path: '/list-tearches',
    element: <ListTearches />
  }
])