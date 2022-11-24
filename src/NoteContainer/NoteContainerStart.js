import React from 'react'
import './NoteContainer.css'

function NoteContainerStart(props) {
  return (
    <div className='note-container'>
      {props.children}
    </div>
  )
}

export default NoteContainerStart