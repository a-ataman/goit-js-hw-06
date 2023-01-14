const input = document.querySelector('#validation-input');
const numberLength = Number(input.getAttribute('data-length'));

input.addEventListener('blur', () => {
    const length = input.value.length;

    if (length === numberLength) {
        return input.classList.add('valid');
    }
    input.classList.add('invalid');
});
