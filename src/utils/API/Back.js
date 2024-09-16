const url = 'http://localhost:3000/api/v1'

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
    const mensajeError = error.message || 'Error en la solicitud'
    mostrarError(mensajeError)
    return { error: mensajeError }
  }

  const resfinal = await res.json()
  return resfinal
}

export const mostrarError = (mensaje) => {
  const error = document.createElement('p')
  error.textContent = mensaje
  error.style.color = 'red'
  document.body.append(error)
}
