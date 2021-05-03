import * as fromNotes from './notes.actions';

describe('loadNotess', () => {
  it('should return an action', () => {
    expect(fromNotes.loadNotes().type).toBe('[Notes] Load Notess');
  });
});
