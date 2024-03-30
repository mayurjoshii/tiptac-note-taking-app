import React, { Dispatch, SetStateAction } from 'react'
import { EditorProvider, FloatingMenu, useCurrentEditor } from '@tiptap/react'
import style from './tiptac.css'
import classNames from 'classnames'
import StarterKit from '@tiptap/starter-kit'
import Color from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'
import ListItem from '@tiptap/extension-list-item'

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
  // TextStyle.configure({ types: [ListItem.name] }),
  /* StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }), */

]

export interface ITipTapEditorProps {
  content: string
  setContent: Dispatch<SetStateAction<string>>
}

const SaveButton = () => {
  const { editor } = useCurrentEditor()

  return (
    <button onClick={() => console.log("Save note--", editor?.getHTML())}>
      Save note
    </button>
  )
}

export const TiptapEditor = (props: ITipTapEditorProps) => {
  const { content, setContent } = props

  return (
    <div className={style.tiptapEditorContainer}>
      <EditorProvider
        editorProps={{
          attributes: {
            style: "height:500px;border:1px solid #aaa;border-radius:4px;padding-left:8px;padding-right:8px;"
          }
        }}
        extensions={extensions}
        content={content}
        slotBefore={<MenuBar />}
        onUpdate={({
          editor
        }) => {
          console.log("Updating--", editor.getHTML())
          setContent(editor.getHTML())
        }}
      >
        <SaveButton />
      </EditorProvider>
      <FloatingMenu>This is the floating menu</FloatingMenu>
      {/* <BubbleMenu>This is the bubble menu</BubbleMenu> */}

    </div>
  )
}