import React, {useState, useEffect} from 'react'
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
// import notes from '../assets/data'

const NotePage = () => {
    let {id} = useParams();
    let [note, setNote] = useState(null)
    useEffect( () => {
        getNote(id)
    }, [id])//runs onload and when id is changed

    let getNote = async (id) => {
        let response = await fetch(`http://localhost:5000/notes/${id}`)
        let data = await response.json()
        setNote(data)
    }
    return( 
        <div className='note'>
            <div className='note-header'>
                <h3>
                    <Link to="/"><ArrowLeft/></Link>
                </h3>
            </div>
            <textarea value={note?.body}></textarea>
            <p><em>Last Updated: {note?.updated}</em></p>
        </div>
    )
}

export default NotePage;