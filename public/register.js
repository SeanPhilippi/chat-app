const newUser = {
  username: null,
  email: null,
  password: null,
  password2: null
};

function onTextChange(e) {
  newUser[e.target.id] = e.target.value;
};

function onFormSubmit(e) {
  e.preventDefault();
  document.querySelector('.input').value = '';
  passwordError();
  incompleteError();
};

function passwordError() {
  if (newUser.password !== newUser.password2) {
    document.querySelector('#errors').innerText = 'your passwords must match!'
    document.querySelector('#errors').className = 'd-block';
  }
};

// check all inputs to make sure they are not empty
function incompleteError() {
  let numOfFields = 0;
  console.log('input array', Array.from(document.querySelectorAll('input')))
  Array.from(document.querySelector('input')).forEach((input) => {
    console.log(input.value)
    if (input.value === '') {
      numOfFields++;
      console.log(numOfFields)
    }
    return numOfFields !== 0 ? document.querySelector('#errors').innerText = `${numOfFields} fields are incomplete.  Please fill out all fields.` : null;
  })
}