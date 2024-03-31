import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { NoteActions } from 'app/actions/todos';
import { INote} from 'app/models';
import { v4 as uuidv4 } from 'uuid'

const initialState: RootState.NoteListState = [
  {
    id: uuidv4(),
    content: '<p>Start editing here</p>'
  }
];

export const noteReducer = handleActions<RootState.NoteListState, INote>(
  {
    [NoteActions.Type.SAVE_NOTE]: (state, action) => {
      console.log("Inside save note reducer11");
      
      if (action.payload && action.payload.content && action.payload.id) {
        const { id, content } = action.payload
        console.log("Inside save note reducer22");
        
        return [
          ...state,
          {
            id,
            content
          }
        ];
      }
      return state;
    }
  },
  initialState
);
