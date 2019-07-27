window.onload(() => {
  fetch('/clients', {
    method: 'POST',
    // mode: 'cors',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(data => data.json())
})