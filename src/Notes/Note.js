import React,{} from 'react'

function Note({title,noteClicked,active}) {
    
  return (
    <h2 className={`note `} onClick={noteClicked}>
        {title}
    </h2>
  )
}

export default Note