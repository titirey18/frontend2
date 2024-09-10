import { button } from '../../components/Button/button'
import { Loginform } from '../../components/Loginform/loginform'
import { Registerform } from '../../components/registerform/registerform'
import { creatpage } from '../../utils/function/createpage'
import { submitLog } from '../../utils/function/submitLog'
import { submitReg } from '../../utils/function/submitReg'

import './Login.css'

let viewLogin = true

export const Login = () => {
  const div = creatpage('Login')

  const form = document.createElement('form')

  div.append(
    button({
      Text: 'Regístrate aquí',
      funct: () => {
        viewLogin = !viewLogin
        form.innerHTML = ''
        viewLogin ? Loginform(form) : Registerform(form)
        document.querySelector('.Button-change').textContent = viewLogin
          ? 'Regístrate aquí'
          : 'Ve al login para iniciar sesión'
        if (viewLogin) {
          form.removeEventListener('submit', submitReg)
        } else {
          form.removeEventListener('submit', submitLog)
        }

        form.addEventListener('submit', viewLogin ? submitLog : submitReg)
      },
      className: 'Button-change'
    })
  )

  form.addEventListener('submit', submitLog)

  Loginform(form)
  div.append(form)
}
