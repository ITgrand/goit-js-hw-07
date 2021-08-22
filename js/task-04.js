
const refs = {
    decrement: document.querySelector('[data-action="decrement"]'),
    increment: document.querySelector('[data-action="increment"]'),
};

const counterValue = document.querySelector('#value');
let total = 0;

const decrement = () => {
    total -= 1;
    counterValue.textContent = total;
}

const increment = () => {
    total += 1;
    counterValue.textContent = total;
}

refs.decrement.addEventListener('click', decrement);
refs.increment.addEventListener('click', increment);

