import { useMemo } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { createAction } from 'redux-actions';
import { INote } from 'app/models';

export namespace NoteActions {
  export enum Type {
    SAVE_NOTE = 'SAVE_NOTE',
    DELETE_NOTE = 'DELETE_NOTE',
    // DELETE_TODO = 'DELETE_TODO',
    // COMPLETE_TODO = 'COMPLETE_TODO',
    // COMPLETE_ALL = 'COMPLETE_ALL',
    // CLEAR_COMPLETED = 'CLEAR_COMPLETED'
  }

  export const saveNote = createAction<INote>(Type.SAVE_NOTE);
  export const deleteNote = createAction<Pick<INote, 'id'>>(Type.DELETE_NOTE);
  // export const editTodo = createAction<PartialPick<TodoModel, 'id'>>(Type.EDIT_TODO);
  // export const deleteTodo = createAction<TodoModel['id']>(Type.DELETE_TODO);
  // export const completeTodo = createAction<TodoModel['id']>(Type.COMPLETE_TODO);
  // export const completeAll = createAction(Type.COMPLETE_ALL);
  // export const clearCompleted = createAction(Type.CLEAR_COMPLETED);
}

export type NoteActions = Omit<typeof NoteActions, 'Type'>;
export const useNoteActions = (dispatch: Dispatch) => {
  const { Type, ...actions } = NoteActions;
  return useMemo(() => bindActionCreators(actions as any, dispatch), [dispatch]) as NoteActions;
};
