// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його
// вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

//     Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті
// data - length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо
// неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid, які ми вже додали
//  у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

// Викликаємо input.
const textInput = document.querySelector('#validation-input');
// Функція, яка перевіряє вміст інпуту,щодо правильної кількості
// введених символів під час втрати фокусу на інпуті(подія blur).
textInput.addEventListener('blur', event => {
  console.dir(event);
  const {
    dataset: { length },
    value,
    classList,
  } = event.target;
  if (Number(length) === value.length) {
    classList.remove('invalid');
    classList.add('valid');
  } else {
    classList.add('invalid');
  }
});
