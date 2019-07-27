const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.listen(8080, () => {
  console.log('express app listening on port 8080');
})

let clientId = 0;


const messages = [
  {
    clientId: 0,
    text: "Welcome To Chat"
  }
];

app.post('/clients', (req, res) => {
  clientId++;
  res.send(clientID.toString());
});

app.post('/messages', (req, res) => {
  console.log('req.body', req.body)
  messages.push(req.body);
  res.json(messages);
});

app.get('/messages', (req, res) => {
  res.json(message);
});