import React,{useState} from 'react'
import './Notes.css'
import Note from './Note'

function Notes({notes}) {
  
  return (
    <div className='notes'>
      { 
        
        (notes || []).map(note => <Note key={note.id} title={note.title} content={note.content}/>)
        
      }
      <button className='add-btn'>+</button>
    </div>
  )
}

export default Notes