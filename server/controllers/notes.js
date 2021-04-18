class notesController {
  constructor(service, expressApp) {
    this.service = service;
    this.expressApp = expressApp;
  }

  initEndpoints() {
    this.expressApp.get('/notes', this.getAllNotes.bind(this));
    this.expressApp.post('/notes', this.setOneNote.bind(this));
  }

  getAllNotes(req, res) {
    res.send(this.service.getAllNotes());
  };

  setOneNote(req, res) {
    res.send(this.service.setOneNote(req.body));
  };
};

module.exports = notesController;
