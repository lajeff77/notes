import React, {useState, useEffect} from 'react'
// import notes from '../assets/data'
import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'

const NotesPage = () => {
    let [notes, setNotes] = useState([])
    useEffect(() => {
        getNotes()
    }, []) //this one only fires onload

    let getNotes = async () => {
        let response = await fetch('http://localhost:3001/notes')
        let data = await response.json()
        setNotes(data)
    }

    const list = [].concat(notes)
    .sort((a, b) => new Date(b.updated) - new Date(a.updated))
    .map((note, index) => (<ListItem key={index} note={note}/>));

    let noteCount = notes.length
    return (
        <div className='notes'>
            <div className='notes-header'>
                <h2 className="notes-title">&#9782;Notes</h2>
                <p className="notes-count">{noteCount}</p>
            </div>
            <div className="notes-list">
                {list}
            </div>
            <AddButton />
        </div>
    )
}

export default NotesPage