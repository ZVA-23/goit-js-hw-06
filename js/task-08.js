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



const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { login, password }
  } = event.currentTarget;

  if (login.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Login: ${login.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}

/* <form class="form" autocomplete="off">
  <input type="text" name="login" placeholder="Login">
  <input type="password" name="password" placeholder="Password">
  <button class="btn" type="submit">Register</button>
</form> */

// Відправлення форми відбувається під час кліку по кнопці з атрибутом type = "submit" або натискання клавіші Enter,
//     перебуваючи в будь - якому її текстовому полі.Подію submit можна застосувати для валідації(перевірки) форми
//      перед відправленням, оскільки на об'єкті події існує багато корисних властивостей, пов'язаних з елементами
// форми.Сабміт форми перезавантажує сторінку, тому не забувайте скасовувати дію за 
// замовчуванням методом preventDefault().