import { creatpage } from '../../utils/function/createpage'
import { back } from '../../utils/API/Back'
import './Favoritos.css'

export const Favoritos = async () => {
  const div = creatpage('Favoritos')
  const h2 = document.createElement('h2')
  const juegosContainer = document.createElement('div')

  h2.textContent = 'Mis juegos Favoritos😁'
  h2.className = 'titulopage'

  juegosContainer.className = 'juegos-container'

  const user = JSON.parse(localStorage.getItem('user'))
  const res = await back({
    endpoint: '/juegos',
    token: localStorage.getItem('token')
  })

  const favoritoJuegos = res.juegos.filter((juego) =>
    user.favoritos.includes(juego._id)
  )

  for (const juego of favoritoJuegos) {
    juegosContainer.innerHTML += `
      <div class="todos_los_juegos"> 
        <h3>${juego.title}</h3>
        <div>
          <img src="${juego.img}" alt="${juego.title}"/>
        </div>
      </div>
    `
  }

  div.append(h2)
  div.append(juegosContainer)
}
