import React, {useState} from 'react'
import Notes from './Notes/Notes';
import './App.css';
import AddNoteForm from './AddNoteForm/AddNoteForm';


function App() {
  
  return (
    <div className='app'>
      <Notes className='notes' />
      <AddNoteForm className='add-note-form'/>
      
   </div>
  );
}

export default App;
