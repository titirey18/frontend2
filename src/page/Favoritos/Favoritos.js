import { creatpage } from '../../utils/function/createpage'
import { back } from '../../utils/API/Back'
import './Favoritos.css'

export const Favoritos = async () => {
  const div = creatpage('Favoritos')

  const user = JSON.parse(localStorage.getItem('user'))
  const res = await back({
    endpoint: '/juegos',
    token: localStorage.getItem('token')
  })

  const favoritoJuegos = res.juegos.filter((juego) =>
    user.favoritos.includes(juego._id)
  )

  for (const juego of favoritoJuegos) {
    div.innerHTML += `
      <div class="todos_los_juegos"> 
        <h3>${juego.title}</h3>
        <div>
          <img src="${juego.img}" alt="${juego.title}"/>
        </div>
      </div>
    `
  }
}
