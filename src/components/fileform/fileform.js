import './fileform.css'

export const fileform = ({ text, type = 'text', required = true }) => {
  return `
    <div class="file-form">
      <label>${text}</label>
      <input type="${type}" ${required ? 'required' : ''}/>
    </div>
  `
}
