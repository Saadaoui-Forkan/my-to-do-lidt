import React , {useState} from 'react'
import './AddNoteForm.css';
import Alert from '../Alert/Alert' 

function AddNoteForm() {
  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')
  const [error,setError] = useState(false)

  const handleChange_title = (e) => {
    setTitle(e.target.value)
  }
  const handleChange_content = (e) => {
    setContent(e.target.value)
  }

  const handleClick = (e) =>{
    e.preventDefault()
    if (title.length === 0 || content.length === 0) {
      setError(true)
    } else{
      setError(false)
    }
  }
  return (
    <form>
        <input className='title-content input' type='text' placeholder='title' onChange={handleChange_title}/>
        <textarea className='note-content input' type='text' placeholder='text' rows='8' onChange={handleChange_content}/>
        <input className='input-btn input' type='submit' value='Save' onClick = {handleClick}/>
        {error ? <Alert/> : ''}
    </form>
    
  )
}

export default AddNoteForm