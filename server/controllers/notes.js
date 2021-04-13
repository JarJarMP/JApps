const mock = [
  {
    title: 'Title 1',
    content: 'Content 1'
  },
  {
    title: 'Title 2',
    content: 'Content 2'
  }
];

const getAllNotes = (req, res) => {
  res.send(mock);
};

const setOneNote = (req, res) => {
  mock.push(req.body);
  res.send(mock);
};

module.exports = expressApp => {
  expressApp.get('/notes', getAllNotes);
  expressApp.post('/notes', setOneNote);
};
