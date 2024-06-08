const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//route
require('./routes/router')(app);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

module.exports = app;