import { RootState } from "app/reducers"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import style from './sidebar.css'
import { RiEdit2Line, RiDeleteBin3Line } from 'react-icons/ri'
import { useNoteActions } from "app/actions"

export const Sidebar = () => {
    const dispatch = useDispatch()
    const { deleteNote } = useNoteActions(dispatch)
    const { setActiveNoteId } = useNoteActions(dispatch)

    const notesList = useSelector((state: RootState) => {
        return state.notes
    })

    const handleNewNoteClick = () => {

    }

    const handleEditClick = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
        e.stopPropagation()
        console.log("Setting id", id)
        setActiveNoteId(id)
    }

    const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
        e.stopPropagation()
        deleteNote({
            id
        })
    }

    return (
        <div className={style.container}>

            <button onClick={handleNewNoteClick}>
                Create new note
            </button>
            <div className={style.noteListContainer}>
                {
                    !!notesList.length && notesList.map(item => (
                        <button className={style.noteButton} onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleEditClick(e, item.id)}>
                            <p>

                                {item.title}
                            </p>
                            <div className={style.noteButtonActionContainer}>
                                {/* <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleEditClick(e, item.id)}>
                                    <RiEdit2Line />
                                </button> */}
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