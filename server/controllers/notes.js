const services = require('../services');
const notesService = services.notes;

const getAllNotes = (req, res) => {
  res.send(notesService.getAllNotes());
};

const setOneNote = (req, res) => {
  res.send(notesService.setOneNote(req.body));
};

module.exports = expressApp => {
  expressApp.get('/notes', getAllNotes);
  expressApp.post('/notes', setOneNote);
};
