const url = 'https://backend2-p7cm.onrender.com'

export const back = async ({
  endpoint,
  body,
  method = 'GET',
  JSONis = true,
  token = null
}) => {
  const headers = {
    Authorization: `Bearer ${token}`
  }

  if (JSONis) {
    headers['Content-Type'] = 'application/json'
    body = body && typeof body === 'string' ? body : JSON.stringify(body)
  }

  const res = await fetch(url + endpoint, {
    body,
    method,
    headers
  })

  if (!res.ok) {
    const error = await res.json()
    const mensajeError = error.message || 'Contraseña o usuario incorrecto'
    mostrarError(mensajeError)
    return { error: mensajeError }
  }

  const resfinal = await res.json()
  return resfinal
}

export const mostrarError = (mensaje) => {
  const errorExistente = document.querySelector('.error-mensaje')
  if (errorExistente){
    errorExistente.remove()
  }

  const error = document.createElement('p')
  error.classList.add('error-mensaje')
  error.textContent = mensaje
  error.style.color ='red'
  error.style.fontSize = "1.2rem"
  document.body.append(error)

  const formulario = document.querySelector("form")
  formulario.prepend(error)
}
