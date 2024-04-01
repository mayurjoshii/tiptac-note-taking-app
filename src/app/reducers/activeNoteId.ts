import { NoteActions } from "app/actions"
import { handleActions } from "redux-actions"
import { RootState } from "."

const initialState: string | null = null

export const activeIdReducer = handleActions<RootState.ActiveNoteId, string>(
 {
  [NoteActions.Type.SET_ACTIVE_NOTE_ID]: (_state, action) => {
   if (action.payload && action.payload) {
    return action.payload
   }
   return null
  },
  // {
  //  [NoteActions.Type.REMOVE_ACTIVE_NOTE_ID]: (_state, _action) => {
  //   return null
  //  }
  // }
 },
 initialState
)