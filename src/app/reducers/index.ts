import { combineReducers } from 'redux';
import { RootState } from './state';
import { noteReducer } from './notes';

export { RootState };

export const rootReducer = combineReducers<RootState>({
  notes: noteReducer
});
