import './button.css'

export const button = ({ Text, funct, className }) => {
  const button = document.createElement('button')
  button.classList.add('Change-button')
  button.classList.add(className)
  button.textContent = Text
  button.addEventListener('click', funct)
  return button
}
