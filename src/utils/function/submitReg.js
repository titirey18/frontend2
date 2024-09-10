import { back } from '../API/Back'

export const submitReg = async (e) => {
  e.preventDefault()

  const [nameput, lastenameput, emailput, passwordput] = e.target

  const body = {
    userName: nameput.value,
    lastName: lastenameput.value,
    email: emailput.value,
    password: passwordput.value
  }

  const resultado = await back({
    endpoint: '/users/register',
    body,
    method: 'POST'
  })

  if (resultado.error) {
    mostrarError(resultado.error)
  } else {
    const resultadoLogin = await back({
      endpoint: '/users/login',
      body,
      method: 'POST'
    })

    if (resultadoLogin.error) {
      mostrarError(resultadoLogin.error)
    } else {
      localStorage.setItem('user', JSON.stringify(resultadoLogin.user))
      localStorage.setItem('token', resultadoLogin.token)
      Home()
      Header()
    }
  }
}
