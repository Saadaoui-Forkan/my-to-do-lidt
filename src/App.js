import React, {useState} from 'react'
import Notes from './Notes/Notes';
import './App.css';
import AddNoteForm from './AddNoteForm/AddNoteForm';
import NoteContainer from './NoteContainer/NoteContainer';

function App() {
  const [notes,setNotes] = useState([])
  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')
  const [selectedNote,setSelectedNote] = useState(null)
  const [error,setError] = useState(false)
  const [creating,setCreating] = useState(false)
  const [showNote,setShowNote] = useState(false)
  const [editing,setEditing] = useState(true)

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
      setSelectedNote(note.id)
    }
    setTitle('')
    setContent('')
  }

  const handleAddNote = () => {
    setCreating(true)
    setTitle('')
    setContent('')
  }

  const noteClicked = (id) => {
    setCreating(false)
    let theClickedNote = notes.find((note)=> note.id === id)
    setContent(theClickedNote.content)
    setTitle(theClickedNote.title)
    setSelectedNote(theClickedNote.id)
    setShowNote(true)
  }

    const deleteNoteHandler = (selectedNote) =>{
    const updatedNotes = [...notes]
    const findIndex = updatedNotes.findIndex(note => note.id === selectedNote )
    updatedNotes.splice(findIndex,1)
    setSelectedNote(null)
    setNotes(updatedNotes)
    setShowNote(false)
  }

const updateNoteHandler = (selectedNote) =>{
  setCreating(true)
  setEditing(false)
  const updatedNotes = [...notes]
  const noteIndex = notes.findIndex(note => note.id === selectedNote)
  updatedNotes[noteIndex] = {
    id: selectedNote,
    title: title,
    content: content
  }
  setNotes(updatedNotes)
}

const editNoteHandler = (e) => {
  e.preventDefault()
  const updatedNotes = [...notes]
  const noteIndex = notes.findIndex(note => note.id === selectedNote)
  // setTitle(updatedNotes[noteIndex].title)
  updatedNotes[noteIndex] = {
    id: selectedNote,
    title: title,
    content: content
  }
  setNotes(updatedNotes)
  setEditing(true)
  setTitle('')
  setContent('')
  // setCreating(false)
  // setShowNote(false)
}
  return (
    <div className='app'>

      <Notes className='notes'
        notes={notes}
        handleAddNote={handleAddNote}
        noteClicked={noteClicked}
      />

      {
        !creating 
        
        ? 
        <NoteContainer className=''
          title = {title}
          content = {content}
          showNote = {showNote}
          deleteNoteHandler = {deleteNoteHandler}
          updateNoteHandler={updateNoteHandler}
          selectedNote = {selectedNote}
        /> 

        : 
        <AddNoteForm className='add-note-form' 
            saveNoteHandler={saveNoteHandler}
            handleChangeContent={handleChange_content}
            handleChangeTitle={handleChange_title}
            error={error}
            title={title}
            content={content}
            editing = {editing}
            editNoteHandler = {editNoteHandler}
            selectedNote = {selectedNote}
          />
      }

    </div>
  );
}

export default App;
