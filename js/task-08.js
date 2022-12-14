// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

//     Обробка відправлення форми form.login - form повинна відбуватися відповідно
//     до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі
//  поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в
// об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням
// властивості.Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми
// методом reset.

// Викликаємо form.
const form = document.querySelector('.login-form');
// Обробка відправлення форми form.login - form повинна відбуватися відповідно
// до події submit.
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  // Під час відправлення форми сторінка не повинна перезавантажуватися.
  event.preventDefault();
  // Якщо користувач заповнив усі поля і відправив форму, збери значення полів в
  // об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням
  // властивості.Для доступу до елементів форми використовуй властивість elements.
  const { email, password } = event.currentTarget.elements;
  const elements = {
    email: email.value,
    password: password.value,
  };
  // Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі
  //  поля повинні бути заповнені.
  if (elements.email === '' || elements.password === '') {
    alert(`Please fill in all the fields!`);
  } else {
    // Виведи об'єкт із введеними даними в консоль
    console.log(elements);
    // і очисти значення полів форми методом reset.
    event.currentTarget.reset();
  }
}
