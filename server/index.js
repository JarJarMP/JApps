const express = require('express');

const config = require('./config');
const controllers = require('./controllers');

const app = express();

controllers(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => res.send('works'));
app.listen(config.expressPort, err => {
  if (err) {
    console.log('app failed to start:', err);
  } else {
    console.log(`app is started and listening at http://localhost:${config.expressPort}`);
  }
});
