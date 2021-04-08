import * as fromNotes from '../reducers/notes.reducer';
import { selectNotesState } from './notes.selectors';

describe('Notes Selectors', () => {
  it('should select the feature state', () => {
    const result = selectNotesState({
      [fromNotes.notesFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
