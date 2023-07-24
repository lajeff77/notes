import React from 'react'
import { Link } from 'react-router-dom'

const ListIem = ({note}) => {
  let getTitle  = (note) => {
    //split by newline
    const title = note.body.split('\n')[0]
    if (title.length > 45)
      return title.slice(0,45)//up to 45 characters
    return title;
  }

    let getTime = (note) => {
      return new Date(note.updated).toLocaleDateString()
    }

    let getContent = (note) => {
      let lines = note.body.split('\n')
      let i = 1;//start after the title
      let content = '';
      //check for next complete line while the string is empty and there are still more lines
      while(i < lines?.length && content === ''){
          content = lines[i++];
      }
      if(content.length > 45)
       return content.slice(0,45) + '...'
      return content
    }

  return (
    <Link to={`/note/${note.id}`}>
      <div className='notes-list-item'>
          <h3>{getTitle(note)}</h3>
          <p><span>{getTime(note)}</span> {getContent(note)}</p>
          
      </div>
    </Link>
  )
}

export default ListIem