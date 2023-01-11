const input = document.querySelector('input');

let inputValue = document.querySelector('#validation-input');

let length = inputValue.dataset.length;


inputValue.addEventListener('change', element =>{ 

  const text = element.target.value;
    if (text.length === +length) {
    inputValue.classList.add('valid');
      
    } else {
    inputValue.classList.add('invalid');
  }
});
