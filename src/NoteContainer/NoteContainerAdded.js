import React from 'react'
import './NoteContainer.css'

function NoteContainerAdded({title,content,selectedNote,deleteNoteHandler,updateNoteHandler}) {
  return (
    <div className='note-container'>
      <h2 className='title-added'>{title}</h2>
      <p className='content-added'>{content}</p>
      <div className='btns'>
        <button className='delete' onClick={()=>deleteNoteHandler(selectedNote)}>Delete</button>
        <button className='edit' onClick={()=>updateNoteHandler(selectedNote)}>Edit</button>
      </div>
    </div>
  )
}

export default NoteContainerAdded