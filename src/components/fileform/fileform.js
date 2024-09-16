import './fileform.css'

export const fileform = ({ text, name, type = 'text', required = true }) => {
  return `
    <div class="file-form">
      <label>${text}</label>
      <input type="${type}" name="${name}" ${required ? 'required' : ''}/>
    </div>
  `
}
