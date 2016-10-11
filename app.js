const PORT = 8000;

const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser')

const Yelp = require('./models/yelp');

const app = express();

//  APP MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES
  // GET /
app.get('/', (req, res) => {
  let obj = {
    message: 'Hello world!'
  };
  res.send(obj);
});

app.get('/search', (req, res) => {
  let { search, location } = req.query;
  // console.log('search', search, 'location', location);
  Yelp.search(search, location, (err, data) => {
    if(err) return res.status(400).send(err);

    res.send(data);
  })
})

app.get('/business/:id', (req, res) => {
  let { id } = req.params;
  // console.log('id', id);
  Yelp.businessLookup(id, (err, data) => {
    if(err) return res.status(400).send(err);

    res.send(data);
  })
})

// // using url params. id is dynamic portion
// app.get('/clogs/:id', (req, res) => {
//
//   console.log('req.params.id:', req.params.id);
//   console.log('req.query:', req.query);
//
//   res.send(req.params.id);
// })
//
//   // POST
// app.post('/clogs', (req, res) => {
//   console.log('req.body:', req.body)  // points to bodyParser
//
//   Clog.create(req.body, err => {
//     if(err) return res.status(400).send(err);
//
//     res.send();
//   });
//
//   // res.send('new clog created\n');
// })

app.listen(PORT, err => {
  console.log(err || `Express listening on port ${PORT}`);
});
