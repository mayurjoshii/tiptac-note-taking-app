import { RootState } from "app/reducers"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import style from './sidebar.css'
import { RiDeleteBin3Line } from 'react-icons/ri'
import { BiPlus } from 'react-icons/bi'
import { useNoteActions } from "app/actions"
import { v4 as uuidv4 } from 'uuid'

export const Sidebar = () => {
    const dispatch = useDispatch()
    const { saveNote, deleteNote, setActiveNoteId, removeActiveNoteId } = useNoteActions(dispatch)

    const { notesList, activeNoteId } = useSelector((state: RootState) => {
        return {
            notesList: state.notes,
            activeNoteId: state.activeNoteId
        }
    })

    const handleNewNoteClick = () => {
        const newNoteId = uuidv4()

        saveNote({
            content: "<p>This is a new note. Start editing here</p>",
            id: newNoteId,
            title: `Note ${notesList.length + 1}`
        })

        setActiveNoteId(newNoteId)
    }

    const handleEditClick = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
        e.stopPropagation()
        setActiveNoteId(id)
    }

    const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
        e.stopPropagation()
        deleteNote({
            id
        })

        if (activeNoteId === id) {
            removeActiveNoteId()
        }
    }

    return (
        <div className={style.container}>
            <button onClick={handleNewNoteClick} className={style.newNoteButton}>
                Create new note <span><BiPlus /></span>
            </button>
            <div className={style.noteListContainer}>
                {
                    !!notesList.length && notesList.map(item => (
                        <button className={style.noteButton} onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleEditClick(e, item.id)}>
                            <p>
                                {item.title}
                            </p>
                            <div className={style.noteButtonActionContainer}>
                                <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleDeleteClick(e, item.id)}>
                                    <RiDeleteBin3Line />
                                </button>
                            </div>
                        </button>
                    ))
                }

            </div>
        </div>
    )
}