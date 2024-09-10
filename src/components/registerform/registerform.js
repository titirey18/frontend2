import { button } from '../Button/button'
import { fileform } from '../fileform/fileform'
import './registerform.css'

export const Registerform = (form) => {
  form.className = 'Register-Form'
  form.innerHTML = `
    ${fileform({ text: 'Nombre', name: 'userName' })}
    ${fileform({ text: 'Apellido', name: 'lastName' })}
    ${fileform({ text: 'Correo Electrónico', name: 'email', type: 'email' })}
    ${fileform({ text: 'Contraseña', name: 'password', type: 'password' })}
  `
  form.append(button({ Text: 'Register', funct: () => {} }))
}
