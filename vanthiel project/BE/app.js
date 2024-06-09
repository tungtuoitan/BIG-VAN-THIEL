const express = require('express')
const app = express()
var cors = require('cors')
require('dotenv').config();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//route
require('./routes/router')(app);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

module.exports = app;