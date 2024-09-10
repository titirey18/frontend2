import { Header } from './src/components/Header/Header'
import { Home } from './src/page/Home/Home'
import './style.css'

const Principal = () => {
  const app = document.querySelector('#app')

  app.innerHTML = `<header></header>
                  <main></main>`
}

Principal()
Header()
Home()
