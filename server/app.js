const express = require('express');
const app = express();
const bodyOarser = require('body-parser');

const db = reruire('./db');
const models = require('./models');

const port = 3000;

app.get('/api/cows', (req, res) => {
  models.get((result) => {
    res.status(200).send(result);
  })
}

app.post('/api/cows', (req, res) => {
  let name = req.body.name;
  let description = req.body.description;
  models.post(name, description, (err, result) => {
    if( err ) { throw err; }
    res.sendStatus(200);
  }
});

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))
