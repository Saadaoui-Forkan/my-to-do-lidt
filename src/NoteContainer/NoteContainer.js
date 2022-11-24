import React,{} from 'react'
import './NoteContainer.css'
import NoteContainerStart from './NoteContainerStart'
import NoteContainerAdded from './NoteContainerAdded'

function NoteContainer({title,content,showNote,deleteNoteHandler,selectedNote,updateNoteHandler}) {

  return (
    <>
    {
      !showNote 
      ? 
      <NoteContainerStart>
        <h2>Welcome To My ToDo</h2>
        <p>Please click on the button below to enter your todo</p>
      </NoteContainerStart> 

      : 
      <NoteContainerAdded 
      title={title} 
      content={content}
      deleteNoteHandler={deleteNoteHandler}
      selectedNote = {selectedNote}
      updateNoteHandler={updateNoteHandler}
      />
    }
    </>
  )
}

export default NoteContainer;