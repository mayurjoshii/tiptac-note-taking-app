import { useCurrentEditor } from "@tiptap/react";
import { useNoteActions } from "app/actions";
import { RootState } from "app/reducers";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TiptapEditor } from "../tiptac";
import style from './main.css';
// import { v4 as uuidv4 } from 'uuid';

// const DATA: INote[] = [
//     {
//         id: uuidv4(),
//         content: '<p>some string here</p>'
//     },
//     {
//         id: uuidv4(),
//         content: '<p>some string here</p>'
//     },
//     {
//         id: uuidv4(),
//         content: '<p>some string here</p>'
//     },
//     {
//         id: uuidv4(),
//         content: '<p>some string here</p>'
//     },
//     {
//         id: uuidv4(),
//         content: '<p>some string here</p>'
//     },
//     {
//         id: uuidv4(),
//         content: '<p>some string here</p>'
//     },
//     {
//         id: uuidv4(),
//         content: '<p>some string here</p>'
//     },
//     {
//         id: uuidv4(),
//         content: '<p>some string here</p>'
//     },
// ]


export const Main = () => {
    // const dispatch = useDispatch()
    // const activeNoteId = useNoteActions(dispatch)
    const { editor } = useCurrentEditor()
    const { activeNoteId } = useSelector((state: RootState) => {
        return {
            notes: state.notes,
            activeNoteId: state.activeNoteId,
        }
    })

    console.log({
        activeNoteId,
        type: typeof activeNoteId
    })

    const [noteContent, setNoteContent] = React.useState<string>("<p>You can start typing here</p>")

    console.log({ noteContent })

    if (!activeNoteId) {
        return <div>Select a note from sidebar</div>
    }

    return (
        <div className={style.container}>
            <div className={style.navigationHeader}>
                <button onClick={() => console.log("Back")}>
                    Back
                </button>
            </div>
            <TiptapEditor />
            {/* <div className={style.noteListContainer}>
                {DATA.map(item => (
                    <div key={item.id} className={style.noteContainer}>
                        {item.content}
                    </div>
                ))}
            </div> */}
        </div>
    )
}