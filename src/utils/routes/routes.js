import { Favoritos } from '../../page/Favoritos/Favoritos'
import { Home } from '../../page/Home/Home'
import { Login } from '../../page/Login/Login'

export const routes = [
  {
    path: '/',
    text: 'Home',
    page: Home
  },
  {
    path: '/Login',
    text: 'Login',
    page: Login
  },
  {
    path: '/Favoritos',
    text: 'Favoritos',
    page: Favoritos
  }
]
