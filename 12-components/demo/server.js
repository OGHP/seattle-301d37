'use strict';

require('dotenv').config();

const express = require('express');
const pg = require('pg');

let app = express();
app.set('view engine', 'ejs');
const PORT = process.env.PORT;

const CONSTRING = process.env.DATABASE_URL;
let client = new pg.Client(CONSTRING);
client.connect();

app.get('/', showCategories);
app.get('/links/:category', showLinks);

function showCategories( request, response ) {
  let SQL = "SELECT * FROM categories";
  client.query(SQL)
  .then( data => {
    let categories = data.rows;
    response.render('pages/categories', {items:categories});
  })
}

function showLinks( request, response ) {
  let category = request.params.category;
  let SQL = `
  SELECT categories.category, links.*
    FROM links
    INNER JOIN categories
    ON categories.id = links.category_id
    WHERE categories.category = $1
  `;
  let values = [category];

  client.query(SQL,values)
  .then( data => {
    let listings = data.rows;
    response.render('pages/links', {category:category, items:listings});
  })
}


app.use( express.static('./public') );

app.listen( PORT, () => console.log("Server Up on ", PORT) );
