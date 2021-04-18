const config = require('../config');
const models = require('../models');

const model = models[config.modelType];

const notes = require('./notes');

module.exports = {
  notes: notes(model)
};
