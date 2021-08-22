
const quantityEl = document.querySelectorAll('#categories .item');
console.log(`В списке ${quantityEl.length} категории`);

const itemEl = document.querySelectorAll('.item h2');

itemEl.forEach(value => {
    console.log(`Категория:`, value.textContent);
    console.log(`Количество элементов:`, value.nextElementSibling.children.length);
})