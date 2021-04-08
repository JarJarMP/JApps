import { Action, createReducer, on } from '@ngrx/store';
import * as NotesActions from '../actions/notes.actions';
import { Notes } from "../../../models/notes.interface";

export const notesFeatureKey = 'notes';

export interface State {
  loadingNotes: boolean,
  loadedNotes: boolean,
  error?: Error,
  notes: Notes[]
  noteCreated: boolean,
}

export const initialState: State = {
  loadingNotes: false,
  loadedNotes: false,
  error: null,
  notes: null,
  noteCreated: false,
};

export const reducer = createReducer(
  initialState,
  on(NotesActions.loadNotes, state => ({
    ...state,
    loadingNotes : true,
    loadedNotes: false
  })),
  on(NotesActions.loadNotesSuccess, (state, { notes }) => ({
    ...state,
    notes,
    loadedNotes: true,
    loadingNotes: false,

  })),
  on(NotesActions.loadNotesFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(NotesActions.createNotes, (state) => ({
    ...state,
    noteCreated: false
  })),
  on(NotesActions.createNotesSuccess, (state) => ({
    ...state,
    noteCreated: true,
  })),
  on(NotesActions.createNodesFailure, (state, { error }) => ({
    ...state,
    error
  })),

);

