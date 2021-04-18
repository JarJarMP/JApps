const models = require('../models');
const model = models.mongo;

module.exports = {
  ...model.notes
};
