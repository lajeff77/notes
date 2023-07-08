import React from 'react'
import { useParams } from 'react-router-dom'
import notes from '../assets/data'

const NotePage = () => {
    let {id} = useParams();
    let note = notes.find(note => note.id == id)
    return( 
        <div>
            <p>{note?.body}</p>
            <p><em>Last Updated: {note?.updated}</em></p>
        </div>
    )
}

export default NotePage;