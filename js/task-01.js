// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто
//  елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль
//  текст заголовку елемента(тегу < h2 >) і кількість елементів в категорії(усіх < li >,
//      вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


const numberOfItem = document.querySelectorAll(".item");
console.log(`Number of categories:`, numberOfItem.length);

function addElements() {
  numberOfItem.forEach((item) => {
    const titleItem = item.querySelector("h2");
    console.log(`Category: ${titleItem.textContent}`);
    const numberOfCategory = item.querySelectorAll("ul li");
    console.log(`Elements: ${numberOfCategory.length}`);
  })
}
addElements();


// const numberOfItem = document.querySelectorAll(`.item`);
// console.log(`Number of categories:`, numberOfItem.length);

// numberOfItem.forEach(function (category) {
//   console.log(`Category: ${category.firstElementChild.textContent}`);
//   console.log(`Elements: ${category.lastElementChild.children.length}`);
// })