const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// look for requested resource in /public folder and return it if found
app.use(express.static('public'));

// as a last resort, return index.html
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});

app.listen(8080, () => {
  console.log('express app listening on port 8080');
});

// clientId holds the next id number for the next user as each user hits
// the page, clientId gets incremented.  no 2 users should have the
// same clientId
let clientId = 0;

// messages holds all the messages posted by clients
const messages = [
  {
    clientId: 0,
    text: "Welcome To Chat"
  }
];

// the /clients route will return your unique client id
// when the index.html onload runs, it requests the next client id
app.post('/clients', (req, res) => {
  console.log('post /clients', clientId);
  clientId++;
  res.send(clientId.toString());
});

// the /messages route will add the posted message { clientId: X, messay: Y }
// to the message array (above), and then return the whole list of messages
app.post('/messages', (req, res) => {
  let message = req.body;
  messages.push(message);
  res.json(message);
});

// returns the whole list of messages
app.get('/messages', (req, res) => {
  res.json(message);
});