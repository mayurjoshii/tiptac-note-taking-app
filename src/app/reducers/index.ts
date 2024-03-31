import { combineReducers } from 'redux';
import { RootState } from './state';
import { noteReducer } from './notes';
import { activeIdReducer } from './activeNoteId';

export { RootState };

export const rootReducer = combineReducers<RootState>({
  notes: noteReducer,
  activeNoteId: activeIdReducer,
});
