import { Header } from '../../components/Header/Header'
import { Home } from '../../page/Home/Home'
import { back } from '../API/Back'

export const submitLog = async (e) => {
  e.preventDefault()

  const [nameput, passwordput] = e.target

  const body = {
    userName: nameput.value,
    password: passwordput.value
  }

  const resultado = await back({
    endpoint: '/users/login',
    body,
    method: 'POST'
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
