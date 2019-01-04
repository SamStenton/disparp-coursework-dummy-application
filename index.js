const express = require('express');
const axios = require('axios');
require('dotenv').config();
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}!`);
  // Make request to logging server
  axios.get('https://google.co.uk')
    .then(() => console.log('Request to logging server made', Date.now()))
    .catch(console.log);
});