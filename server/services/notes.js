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

const getAllNotes = () => mock;

const setOneNote = data => {
  mock.push(data);
  return mock;
}

module.exports = {
  getAllNotes,
  setOneNote
};
