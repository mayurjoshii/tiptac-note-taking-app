import React, { Dispatch, SetStateAction } from 'react'
import { EditorContent, EditorProvider, FloatingMenu, useCurrentEditor, useEditor } from '@tiptap/react'
import style from './tiptac.css'
import classNames from 'classnames'
import StarterKit from '@tiptap/starter-kit'
import Color from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'
import ListItem from '@tiptap/extension-list-item'
import { useDispatch, useSelector } from 'react-redux'
import { useNoteActions } from 'app/actions'
import { v4 as uuidv4 } from 'uuid'
import { RootState } from 'app/reducers'

const MenuBar = () => {
  const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }

  return (
    <div className={style.menuBarContainer}>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
        className={classNames(style.menuBarButton,
          { [style['isActive']]: editor.isActive('bold') })
        }
      >
        bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={classNames(style.menuBarButton,
          { [style['isActive']]: editor.isActive('italic') })
        }
      >
        italic
      </button>
    </div>
  )
}

const extensions = [
  StarterKit,
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
]

export interface ITipTapEditorProps {
  // content: string
  // setContent: Dispatch<SetStateAction<string>>
}

interface ISaveButtonProps {
  title: string
}

const SaveButton = (props: ISaveButtonProps) => {
  const { title } = props

  const { editor } = useCurrentEditor()

  const dispatch = useDispatch()
  const { saveNote } = useNoteActions(dispatch)

  const handleNewNoteSave = (content?: string) => {
    if (content) {
      saveNote({
        id: uuidv4(),
        content,
        title
      })
    }
  }

  return (
    <button onClick={() => handleNewNoteSave(editor?.getHTML())}>
      Save note
    </button>
  )
}

export const TiptapEditor = (props: ITipTapEditorProps) => {
  // const { content, setContent } = props
  const [title, setTitle] = React.useState<string>("")

  const editor = useEditor({
    extensions,
    content: "<p>Initial content</p>"
  })

  const { activeNoteId, notes } = useSelector((state: RootState) => {
    return {
      notes: state.notes,
      activeNoteId: state.activeNoteId,
    }
  })


  const currentSelectedNote = notes.find(item => item.id === activeNoteId)

  React.useEffect(() => {
    console.log("Changing active noteid")
    if (currentSelectedNote) {
      if (editor) {
        console.log("Setting content");

        editor.commands.setContent(currentSelectedNote.content)
      }
    }
  }, [currentSelectedNote, activeNoteId])

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }


  return (
    <div className={style.tiptapEditorContainer}>
      <MenuBar />
      <input
        placeholder="Enter note title here"
        onChange={handleTitleChange}
        value={title}
      />
      <EditorContent editor={editor} style={{
        marginTop: "20px",
        height: "500px",
        border: "1px solid #aaa",
        borderRadius: "4px",
        paddingLeft: "8px",
        paddingRight: "8px"
      }} />
      <SaveButton title={title} />
      {/* <FloatingMenu>This is the floating menu</FloatingMenu> */}
      {/* <BubbleMenu>This is the bubble menu</BubbleMenu> */}

    </div>
  )
}