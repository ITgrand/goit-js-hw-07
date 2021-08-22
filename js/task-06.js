
const InputEl = document.querySelector('#validation-input');

InputEl.addEventListener('blur', event => {
    if (
        event.currentTarget.value.length > InputEl.getAttribute('data-length') ||
        event.currentTarget.value.length < InputEl.getAttribute('data-length')
    ) {
        InputEl.classList.add('invalid');
    } else {
        InputEl.classList.add('valid');
    }
})