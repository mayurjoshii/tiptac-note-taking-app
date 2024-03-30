import React from 'react'
import { useParams } from 'react-router'


export const Note = () => {
    const { noteId } = useParams<{
        noteId?: string
    }>()
        console.log({
            noteId
        })
    return(
        <div>
            I am new note
        </div>
    )
}