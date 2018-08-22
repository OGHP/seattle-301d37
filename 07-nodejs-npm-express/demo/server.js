'use strict';

const express = require('express');

const app = express();

const PORT = 3000;


app.use( express.static('./public') );

app.get('/foobar', (req,res) => {
  res.send('You found it');
});


app.listen(PORT, function() {
  console.log('Listening on port', PORT);
});


