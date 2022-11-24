import React,{} from 'react'
import './Notes.css'
import Note from './Note'

function Notes({notes,handleAddNote,noteClicked}) {
  
  return (
    <div className='notes'>
      {  
        notes?.map(note => <Note 
          key={note.id} 
          title={note.title} 
          content={note.content}
          noteClicked={()=>noteClicked(note.id)}
          />
        )  
      }
      <button className='add-btn' onClick={handleAddNote}>+</button>
    </div>
  )
}

export default Notes