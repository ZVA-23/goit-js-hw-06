// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по
// кліку на button.change - color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Викликаємо body, button та span.
const button = document.querySelector(".change-color");

const chengeBodyBackgroundColor = () => {
  const randomHexColor = getRandomHexColor();
  // змінює кольори фону елемента < body > через інлайн - стиль
  const bodyBackground = document.querySelector("body");
  bodyBackground.setAttribute("style", `background-color:${randomHexColor}`);
  // і виводить значення кольору в span.color.
  const spanColor = document.querySelector(".color");
  spanColor.textContent = randomHexColor;
  // Для генерування випадкового кольору використовуй функцію getRandomHexColor.
};
// по кліку на button.change - color
button.addEventListener("click", chengeBodyBackgroundColor);
