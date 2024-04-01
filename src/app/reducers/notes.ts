import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { NoteActions } from 'app/actions/notes';
import { INote } from 'app/models';
import { v4 as uuidv4 } from 'uuid'

const initialState: RootState.NoteListState = [
  {
    id: uuidv4(),
    content: '<p>Start editing here</p>',
    title: "Note 1"
  },
  {
    id: uuidv4(),
    content: '<p>Note 2 here hello</p>',
    title: "Note 2"
  },
];

export const noteReducer = handleActions<RootState.NoteListState, INote>(
  {
    [NoteActions.Type.SAVE_NOTE]: (state, action) => {
      if (action.payload && action.payload.content && action.payload.id && action.payload.title) {
        const { id, content, title } = action.payload
        return [
          ...state,
          {
            id,
            content,
            title
          }
        ];
      }
      return state;
    },
    [NoteActions.Type.UPDATE_NOTE]: (state, action) => {
      const copyState = [...state]

      if (action.payload.id) {
        const noteToUpdateIndex = copyState.findIndex(item => item.id === action.payload.id)
        if (noteToUpdateIndex < 0) {
          return state
        }

        copyState[noteToUpdateIndex] = {
          ...copyState[noteToUpdateIndex],
          content: action.payload.content,
          title: action.payload.title
        }

        return copyState
      }

      return state
    },
    [NoteActions.Type.DELETE_NOTE]: (state, action) => {
      if (action.payload && action.payload.id) {
        const copyState = [...state]
        const findIndex = copyState.findIndex(item => item.id === action.payload.id)
        copyState.splice(findIndex, 1)

        return copyState
      }

      return state
    }
  },
  initialState
);
