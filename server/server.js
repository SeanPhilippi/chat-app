const express = require('express');
const app = express();
const bodyParser = require('body-parser');

console.log('app', app)
app.use(bodyParser());

app.listen(3000, () => {
  console.log('express app listening on port 3000');
})

let clientId = 0;


const messages = [
  {
    clientId: 0,
    text: "Welcome To Chat"
  }
];

app.post('/clients', (req, res) => {
  clientID++;
  res.send(clientID.toString());
});

app.post('/messages', (req, res) => {
  res.json(messages);
});

app.get('/messages', (req, res) => {
  res.json(message);
});