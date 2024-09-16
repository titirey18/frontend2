import { Header } from '../../components/Header/Header'
import { Home } from '../../page/Home/Home'
import { back, mostrarError } from '../API/Back'

export const submitLog = async (e) => {
  e.preventDefault()

  const userName = e.target.userName.value.trim()
  const password = e.target.password.value.trim()

  if (!userName || !password) {
    mostrarError('Por favor, ingresa usuario y contraseña')
    return
  }

  const body = { userName, password }

  const resultado = await back({
    endpoint: '/users/login',
    body,
    method: 'POST',
    token: null
  })

  if (resultado.error) {
    mostrarError(resultado.error)
  } else {
    localStorage.setItem('user', JSON.stringify(resultado.user))
    localStorage.setItem('token', resultado.token)
    Home()
    Header()
  }
}
