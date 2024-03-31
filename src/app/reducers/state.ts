import { INote } from 'app/models';

export interface RootState {
  notes: RootState.NoteListState;
  router?: any;
}

export namespace RootState {
  export type NoteListState = INote[];
}
