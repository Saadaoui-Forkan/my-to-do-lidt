import React, {useState} from 'react'
import Notes from './Notes/Notes';
import './App.css';
import AddNoteForm from './AddNoteForm/AddNoteForm';


function App(props) {
  const [notes,setNotes] = useState([])
  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')
  const [error,setError] = useState(false)

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
    <div className='app'>
      <Notes className='notes'
      notes={notes}
      />

      <AddNoteForm className='add-note-form' 
      saveNoteHandler={saveNoteHandler}
      handleChangeContent={handleChange_content}
      handleChangeTitle={handleChange_title}
      error={error}
      />
    </div>
  );
}

export default App;
