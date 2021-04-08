import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromNotes from '../reducers/notes.reducer';
import {State} from "../reducers/notes.reducer";

export const selectNotesState = createFeatureSelector<fromNotes.State>(
  fromNotes.notesFeatureKey
);

export const getAllNotes = createSelector(
  selectNotesState,
  (state: State) => state.notes
);

export const getNotesError = createSelector(
  selectNotesState,
  (state: State) => state.error
);


