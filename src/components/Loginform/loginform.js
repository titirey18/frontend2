import { button } from '../Button/button'
import { fileform } from '../fileform/fileform'
import './loginform.css'

export const Loginform = (form) => {
  form.className = 'Login-Form'
  form.innerHTML = `
   ${fileform({ text: 'Usuario', name: 'userName' })}
   ${fileform({ text: 'Contraseña', name: 'password', type: 'password' })}
  `
  form.append(button({ Text: 'Login', funct: () => {} }))
}
