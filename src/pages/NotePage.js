import React, {useState, useEffect} from 'react'
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'
import { Link } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom'
// import notes from '../assets/data'

const NotePage = () => {
    let {id} = useParams();
    let navigate = useNavigate();
    let [note, setNote] = useState(null)
    useEffect( () => {
        getNote()
    }, [id])//runs onload and when id is changed

    let getNote = async () => {
        if(id !== 'new')
        {
            let response = await fetch(`http://localhost:3001/notes/${id}`)
            let data = await response.json()
            setNote(data)
        }
    }

    let createNote = async () => {
        await fetch(`http://localhost:3001/notes/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...note, 'updated': new Date() })
        })
    }

    let updateNote = async () => {
        await fetch(`http://localhost:3001/notes/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...note, 'updated': new Date() })
        })
    }

    let handleSubmit = () => {
        if(id !== 'new' && !note.body){
            deleteNote()
        } else if (id !== 'new'){
            updateNote()
        } else if (id === 'new' && note !== null){
            createNote()
        }
        navigate('/')
    }

    let deleteNote = async () => {
        await fetch(`http://localhost:3001/notes/${id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        navigate('/')
    }

    return( 
        <div className='note'>
            <div className='note-header'>
                <h3>
                    <Link to="/"><ArrowLeft onClick={handleSubmit}/></Link>
                </h3>
                {id !== 'new'? (
                    <button onClick={deleteNote}>Delete</button>
                ): (
                    <button onClick={handleSubmit}>Done</button>
                )}
                
            </div>
            <textarea onChange={(e) =>{setNote({...note, 'body':e.target.value})}} value={note?.body}></textarea>
            <p><em>Last Updated: {note?.updated}</em></p>
        </div>
    )
}

export default NotePage;