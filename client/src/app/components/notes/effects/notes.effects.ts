import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {catchError, map, concatMap} from 'rxjs/operators';
import { of } from 'rxjs';

import * as NotesActions from '../actions/notes.actions';
import {NotesService} from "../../../services/notes/notes.service";


@Injectable()
export class NotesEffects {

  loadNotes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(NotesActions.loadNotes),
      concatMap(() =>
        this.notesService.getAllNotes().pipe(
          map(notes => NotesActions.loadNotesSuccess({ notes })),
          catchError(error => of(NotesActions.loadNotesFailure({ error }))))
      )
    );
  });

  createNotes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(NotesActions.createNotes),
      concatMap((action) =>
        this.notesService.createNotes(action.notes).pipe(
          map(() => NotesActions.createNotesSuccess()),
          catchError(error => of(NotesActions.loadNotesFailure({ error }))))
      )
    );
  });

  constructor(private actions$: Actions,private notesService: NotesService) {}

}
