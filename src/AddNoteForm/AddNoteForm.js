import React , {useState} from 'react'
import './AddNoteForm.css';
import Alert from '../Alert/Alert' 
import Notes from '../Notes/Notes'

function AddNoteForm() {
  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')
  const [error,setError] = useState(false)
  const [notes,setNotes] = useState([])

  const handleChange_title = (e) => {
    setTitle(e.target.value)
  }
  const handleChange_content = (e) => {
    setContent(e.target.value)
  }

  const saveNoteHandler = (e) =>{
    e.preventDefault()
    if (title.length === 0 || content.length === 0) {
      setError(true)
    } else{

      setError(false)

      const note = {
        id : new Date(),
        title : title,
        content : content
      }

      const updatedNotes = [...notes,note]

      setNotes(updatedNotes)
    }
  }

  return (
    <form>
        <input 
        className='title-content input' 
        type='text' 
        placeholder='title' 
        value={title}
        onChange={handleChange_title}
        />

        <textarea 
        className='note-content input' 
        type='text' 
        placeholder='text' 
        rows='8' 
        value={content}
        onChange={handleChange_content}
        />

        <input 
        className='input-btn input' 
        type='submit' 
        value='Save' 
        onClick = {saveNoteHandler}
        />

        {error ? <Alert/> : ''}

    </form>
    
  )
}

export default AddNoteForm