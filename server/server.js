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
  res.send(clientId.toString());
});

app.post('/messages', (req, res) => {
  let message = req.body;
  messages.push(message);
  res.json(message);
});

app.get('/messages', (req, res) => {
  res.json(message);
});