const express = require('express');
const app = express();
const port = 3000;

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/notes', (req, res) => {
  res.send(mock);
});

app.post('/notes', (req, res) => {
  mock.push(req.body);
  res.send(mock);
});

app.listen(port, () => {
  console.log(`app is listening at http://localhost:${port}`);
});
