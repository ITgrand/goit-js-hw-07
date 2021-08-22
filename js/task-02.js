
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ingredientsEl = document.querySelector('ul#ingredients');

const arrayEl = ingredients.map(ingredient => {
    const listEl = document.createElement('li');
    listEl.textContent = ingredient;

    return listEl;
});

ingredientsEl.append(...arrayEl);

