const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
var hsts = require('hsts');
const path = require('path');
var xssFilter = require('x-xss-protection');
var nosniff = require('dont-sniff-mimetype');
const request = require('request');

const app = express();

app.use(cors());
app.use(express.static('assets'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.disable('x-powered-by');
app.use(xssFilter());
app.use(nosniff());
app.set('etag', false);
app.use(
  helmet({
    noCache: true
  })
);
app.use(
  hsts({
    maxAge: 15552000 // 180 days in seconds
  })
);

app.use(
  express.static(path.join(__dirname, 'dist/softrams-racing'), {
    etag: false
  })
);

app.get('/api/members', (req, res) => {
  request('http://localhost:3000/members', (err, response, body) => {
    if (response.statusCode <= 500) {
      res.send(body);
    }
  });
});

// TODO: Dropdown!
app.get('/api/teams', (req, res) => {
  request('http://localhost:3000/teams', (err, response, body) => {
    if (response.statusCode <= 500) {
      res.send(body);
    }
  });

});

// Submit Form!
app.post('/api/members', (req, res) => {
  request.post({
    headers: {'content-type': 'application/json'},
    url: 'http://localhost:3000/members',
    form: req.body
  }, function(error, response, body){
    if(error) {
      console.log(error);
      res.sendStatus(500);
    }
    res.send(body);
  });
});
app.post('/api/teams', (req, res) => {
  request.post({
    headers: {'content-type': 'application/json'},
    url: 'http://localhost:3000/teams',
    form: req.body
  }, function(error, response, body){
    if(error) {
      console.log(error);
      res.sendStatus(500);
    }
    res.send(body);
  });
});

app.delete('/api/members/:memberId', (req,res) => {
  // TODO: Test Implementation
  console.log(req.params.memberId);
  console.log(req.url);
  request.delete({
    url: `http://localhost:3000/members/${req.params.memberId}`
  }, function(error, response, body){
    if(error) {
      console.log(error);
      res.sendStatus(500);
    }
    res.send(req.params.memberId);
  });
});
app.delete('/api/teams/:teamId', (req,res) => {
  // TODO: Test Implementation
  request.delete({
    url: `http://localhost:3000/teams/${req.params.teamId}`
  }, function(error, response, body){
    if(error) {
      console.log(error);
      res.sendStatus(500);
    }
    res.send(req.params.teamId);
  });
});

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, 'dist/softrams-racing/index.html'));
});

app.listen('8000', () => {
  console.log('Vrrrum Vrrrum! Server starting!');
});
