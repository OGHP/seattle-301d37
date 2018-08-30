'use strict';

require('dotenv').config();

const express = require('express');
const pg = require('pg');

let app = express();
app.set('view engine', 'ejs');
app.use( express.urlencoded({extended:true}));
const PORT = process.env.PORT;

const CONSTRING = process.env.DATABASE_URL;
let client = new pg.Client(CONSTRING);
client.connect();

app.get('/', showCategories);
app.get('/links/:category/:id', showLinks);
app.get('/add-link/:category/:id', addLinkForm);
app.post('/add-link', addLink);

// ------------------------------------------------------ //

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
  let id = request.params.id;
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
    response.render('pages/links', {category:category, id:id, items:listings});
  })
}

function addLinkForm( request, response ) {
  let data = {
    category: request.params.category,
    id: request.params.id
  };

  response.render('pages/add-link-form', data);
}

function addLink( request, response ) {
  let SQL = `
    INSERT INTO links (category_id, title, url, description, keywords)
    VALUES( $1, $2, $3, $4, $5 )
  `;
  let values = [
    request.body.category_id,
    request.body.title,
    request.body.url,
    request.body.description,
    request.body.keywords
  ];

  client.query(SQL, values)
    .then( () => {
      response.render('pages/added', {listing:request.body});
    })

}

app.use( express.static('./public') );

app.listen( PORT, () => console.log("Server Up on ", PORT) );
