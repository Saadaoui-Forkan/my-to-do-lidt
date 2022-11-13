import React from 'react'
import './AddNoteForm.css';

function AddNoteForm() {
  return (
    <form>
        <input className='title-content input' type='text' placeholder='title'/>
        <textarea className='note-content input' type='text' placeholder='text' rows='8' />
        <input className='input-btn input' type='button' value='Save' />
    </form>
  )
}

export default AddNoteForm