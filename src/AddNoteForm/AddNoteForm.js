import React , {} from 'react'
import './AddNoteForm.css';
import Alert from '../Alert/Alert' 

function AddNoteForm(
  {saveNoteHandler,handleChangeTitle,handleChangeContent,
    title,content,error,editing,editNoteHandler,selectedNote}) {

  return (
    <form>
        <input 
        className='title-content input' 
        type='text' 
        placeholder='title' 
        value={title}
        onChange={handleChangeTitle}
        />

        <textarea 
        className='note-content input' 
        type='text' 
        placeholder='text' 
        rows='8' 
        value={content}
        onChange={handleChangeContent}
        />

        {
          editing 
          ? <input 
              className='input-btn input' 
              type='submit' 
              value='Save' 
              onClick = {saveNoteHandler}
            /> 
          : <input 
              className='input-btn input' 
              type='submit' 
              value='Edit' 
              onClick = {editNoteHandler}
            />
        }

        {error ? <Alert/> : ''}

    </form>
    
  )
}

export default AddNoteForm