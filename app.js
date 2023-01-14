const express = require('express');
const hbs= require('hbs');
require('dotenv').config();
const app = express()
const port= process.env.PORT;
app.use( express.static('public'));
hbs.registerPartials(__dirname + '/views/partials', function (err) {});


/*app.get('/',(req, res) => {
  res.send('Home page')
})*/

app.set('view engine', 'hbs')

app.get('/',(req, res) => {
  res.render('home', {
    nombre: 'Karen Rangel',
    titulo: 'Curso de node js'
  });
})

app.get('/generic',(req, res) => {
  res.render('generic', {
    nombre: 'Karen Rangel',
    titulo: 'Curso de node js'
  })
})

app.get('/elements',(req, res) => {
  res.render('elements', {
    nombre: 'Karen Rangel',
    titulo: 'Curso de node js'
  })
})

app.get('/hola-mundo',(req, res) => {
    res.send('Hello World / Hola mundo')
  })

  app.get('*',(req, res) => {
    res.sendFile( __dirname + '/public/404.html')
  })

app.listen(port);
console.log(`Listening for the port ${port}`)