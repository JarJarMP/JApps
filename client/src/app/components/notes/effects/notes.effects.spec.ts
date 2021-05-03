import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { NotesEffects } from './notes.effects';

describe('NotesEffects', () => {
  let actions$: Observable<any>;
  let effects: NotesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NotesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(NotesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
