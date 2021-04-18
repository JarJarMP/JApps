const services = require('../services');

const Notes = require('./Notes');

module.exports = expressApp => {
  const notes = new Notes(services.notes, expressApp);
  notes.initEndpoints();
};
