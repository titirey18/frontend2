import { back } from '../../utils/API/Back'
import { creatpage } from '../../utils/function/createpage'
import './Home.css'

export const Home = async () => {
  const div = creatpage('Home')

  try {

    
    const res = await back({
      endpoint: '/juegos',
      token: localStorage.getItem('token')
    })
    
    const user = JSON.parse(localStorage.getItem('user')) || null
    
    div.innerHTML = ''
    
    if(res && res.juegos && res.juegos.length > 0) {

    for (const juego of res.juegos) {
      const isFavorite = user && user.favoritos.includes(juego._id)
      div.innerHTML += `
      <div class="todos_los_juegos"> 
      <h3>${juego.title}</h3>
      <div>
      <img src="${juego.img}" alt="${juego.title}"/>
      ${
            user
            ? `<img 
            src="${
              isFavorite
              ? 'public/assets/corazon.png'
              : 'public/assets/corazon-vacio.png'
              }"
              class="favorite-icon"
              data-id="${juego._id}"
              alt="${
                isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'
                }"
                />`
                : ''
                }
                </div>
                </div>
                `
              }
              
              if (user) {
                document.querySelectorAll('.favorite-icon').forEach((icon) => {
                  icon.addEventListener('click', async (e) => {
                    const juegoId = e.target.getAttribute('data-id')
                    await toggleFavorite(juegoId)
                    Home()
                  })
                })
              }
            } else {
              div.innerHTML = "<p>No hay juegos disponibles en este momento..</p>"
            }
          } catch (error) {
            div.innerHTML= "<p> Error al cargar los juegos.</p>"
          }
        }
        

const toggleFavorite = async (juegoId) => {
  const user = JSON.parse(localStorage.getItem('user')) || { favoritos: [] }
  const isFavorite = user.favoritos.includes(juegoId)

  if (isFavorite) {
    user.favoritos = user.favoritos.filter((id) => id !== juegoId)
  } else {
    user.favoritos.push(juegoId)
  }

  const body = JSON.stringify({ favoritos: user.favoritos })
  try {

    await back({
      endpoint: `/users/${user._id}`,
      method: 'PUT',
      body,
      token: localStorage.getItem('token')
    })
    
    localStorage.setItem('user', JSON.stringify(user))
  } catch (error) {
    console.error('Error al actualizar favoritos:', error)
  }
}
