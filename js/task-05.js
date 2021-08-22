
const refsEl = {
    inputEl: document.querySelector('#name-input'),
    outputEl: document.querySelector('#name-output')
};

refsEl.inputEl.addEventListener('input', event => {
    refsEl.outputEl.textContent = event.currentTarget.value
        ? event.currentTarget.value
        : 'Незнакомец'
});



