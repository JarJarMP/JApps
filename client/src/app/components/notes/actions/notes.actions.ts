import { createAction, props } from '@ngrx/store';
import {Notes} from "../../../models/notes.interface";

export const loadNotes = createAction(
  '[Notes] Load Notes'
);

export const loadNotesSuccess = createAction(
  '[Notes] Load Notes Success',
  props<{ notes: Notes[] }>()
);

export const loadNotesFailure = createAction(
  '[Notes] Load Notes Failure',
  props<{ error: any }>()
);

export const createNotes = createAction(
  '[Notes] Create Notes',
  props<{ notes: any }>()
);

export const createNotesSuccess = createAction(
  '[Notes] Create Notes Success',
);

export const createNodesFailure = createAction(
  '[Notes] Create Notes Failure',
  props<{ error: any }>()
)
