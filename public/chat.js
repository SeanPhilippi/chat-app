let myClientId;

window.onload = () => {
  setClientId();
}

const setClientId = () => {
  fetch('/clients', {
    method: 'POST',
  }).then(res => {
    // call .text() to get the res stream converted to plain text
    return res.text()
  }).then(id => {
    myClientId = id;

    // display clientId on the page
    document.getElementById('myClientId').innerHTML = myClientId;
  });
};

const postMessage = e => {
  e.preventDefault();
  let message = document.getElementById('messageText').value;
  setClientId();

  // build a message object wiht clientId and message
  const body = {
    clientId: myClientId,
    text: message
  }

  fetch('/messages', {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    // body data type must match Content-Type in header
    // stringifying for server side
    body: JSON.stringify(body)
  })
  // call data.json() to turn the res stream into a full json document
  // responses to fetch() are *streams* -- chunks of data sent back over the network, not simple text.
  // json() gathers all of those chunks and assembles them into a complete json document
  .then(res => res.json())
  .then(() => {
    // clear input
    document.getElementById('messageText').value = '';
  });
}

const getMessages = () => {
  const messagesDiv = document.getElementById('messages');
  fetch('/messages')
  // convert stream to json objects
  .then(res => res.json())
  // should have an array of message objects
  .then(messages => {
    // map over these objects to create a series of divs containing the id and message text
    const messagesList = messages.map(message => {
      return `<div>${message.clientId} - ${message.text}</div>`
    })
    messagesDiv.innerHTML = messagesList.join('\n');
  });
};

setInterval(() => {
  getMessages();
}, 1000);