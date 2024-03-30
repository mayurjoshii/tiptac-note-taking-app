import React from "react";
import { TiptapEditor } from "../tiptac";
import style from './main.css';
// import { v4 as uuidv4 } from 'uuid';

// interface INote {
//     id: string,
//     content: string
// }

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
    const [noteContent, setNoteContent] = React.useState<string>("<p>You can start typing here</p>")
        console.log({noteContent})
    return (
            <div className={style.container}>
                <div className={style.navigationHeader}>
                    <button onClick={() => console.log("Back")}>
                        Back
                    </button>
                </div>
                <TiptapEditor content={noteContent} setContent={setNoteContent} />
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