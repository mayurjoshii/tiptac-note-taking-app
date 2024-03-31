import { INote } from 'app/models';

export interface RootState {
  notes: RootState.NoteListState;
  activeNoteId: RootState.ActiveNoteId
  router?: any;
}

export namespace RootState {
  export type NoteListState = INote[];
  export type ActiveNoteId = string | null
}
