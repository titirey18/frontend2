import { navigate } from '../../utils/function/nav'
import { routes } from '../../utils/routes/routes'
import './Header.css'

export const Header = () => {
  const header = document.querySelector('header')
  header.innerHTML = ''
  const nav = document.createElement('nav')
  const ul = document.createElement('ul')

  ul.classList = 'navigation'

  for (const route of routes) {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.textContent = route.text
    a.href = route.path

    if (route.text === 'Login' && localStorage.getItem('token')) {
      a.textContent = 'LogOut'
      a.addEventListener('click', () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        Header()
      })
    } else {
      if (!localStorage.getItem('token') && route.text === 'Favoritos') {
        continue
      }
      a.addEventListener('click', (e) => navigate(e, route))
    }

    li.append(a)
    ul.append(li)
  }

  header.append(nav)
  nav.append(ul)
}
