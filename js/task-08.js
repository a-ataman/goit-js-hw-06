const form = document.querySelector('form.login-form')

form.addEventListener('submit', submitHandler)

function submitHandler(event) {
  event.preventDefault();
  const {email, password} = event.currentTarget.elements;
  
  if (email.value === '' || password.value === '') {
    return alert('Заповніть всі поля')
  };
  const formContents = { email: email.value, Password: password.value };

  console.log(formContents);
  
  event.currentTarget.reset()
}
