// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>

// JavaScript містить масив рядків.

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listWithIngredients = ingredients =>
    document.querySelector(`#ingredients`)
    .append(...ingredients.map(ingredient => {
    const ingredientItem = document.createElement(`li`);
      ingredientItem.textContent = ingredient;
      ingredientItem.classList.add("item");
    return ingredientItem;
    }))
listWithIngredients(ingredients);
console.log(document.querySelector(`#ingredients`));
