import { useCurrentEditor } from '@tiptap/react'
import React from 'react'
import style from './header.css'

export const Header = () => {
    const { editor } = useCurrentEditor()
    console.log("Log inside header--", editor?.getHTML())
    
    React.useEffect(() => {
        if(editor){
            console.log("Log after editor present--", editor?.getHTML())
            editor.commands.setContent("<p>I am fron Header</p>")
        }
    },[editor])
    return(
        <div className={style.container}>
            I am a header
        </div>
    )
}