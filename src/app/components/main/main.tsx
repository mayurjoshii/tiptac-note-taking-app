import { RootState } from "app/reducers";
import React from "react";
import { useSelector } from "react-redux";
import { TiptapEditor } from "../tiptac";
import style from './main.css';

export const Main = () => {
    const activeNoteId = useSelector((state: RootState) => {
        return state.activeNoteId
    })

    if (!activeNoteId) {
        return <div className={style.container}>Select a note from sidebar</div>
    }

    return (
        <div className={style.container}>
            <TiptapEditor />
        </div>
    )
}