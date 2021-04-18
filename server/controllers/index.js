const services = require('../services');

const Notes = require('./notes');

module.exports = expressApp => {
  const notes = new Notes(services.notes, expressApp);
  notes.initEndpoints();
};
