import { useMemo } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { createAction } from 'redux-actions';
import { INote } from 'app/models';

export namespace NoteActions {
  export enum Type {
    SAVE_NOTE = 'SAVE_NOTE',
    UPDATE_NOTE = 'UPDATE_NOTE',
    DELETE_NOTE = 'DELETE_NOTE',
    SET_ACTIVE_NOTE_ID = "SET_ACTIVE_NOTE_ID",
    REMOVE_ACTIVE_NOTE_ID = "REMOVE_ACTIVE_NOTE_ID",
  }

  export const saveNote = createAction<INote>(Type.SAVE_NOTE);
  export const updateNote = createAction<INote>(Type.UPDATE_NOTE);
  export const deleteNote = createAction<Pick<INote, 'id'>>(Type.DELETE_NOTE);
  export const setActiveNoteId = createAction<string>(Type.SET_ACTIVE_NOTE_ID)
  export const removeActiveNoteId = createAction(Type.REMOVE_ACTIVE_NOTE_ID)
}

export type NoteActions = Omit<typeof NoteActions, 'Type'>;
export const useNoteActions = (dispatch: Dispatch) => {
  const { Type, ...actions } = NoteActions;
  return useMemo(() => bindActionCreators(actions as any, dispatch), [dispatch]) as NoteActions;
};
