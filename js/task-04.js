// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати
//  і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

//     Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника
// та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення
// лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


// Викликаємо кнопки і спан.
const addCounterButton = document.querySelector(`#counter button[data-action="decrement"]`);
console.log(addCounterButton);
const remCounterButton = document.querySelector(`#counter button[data-action="increment"]`);
console.log(remCounterButton);
const counterSpan = document.querySelector(`#value`);
console.log(counterSpan);
//Створюємо змінну counterValue, в якій буде зберігатися поточне значення лічильника
// та ініціалізуємо її значенням 0.
let counterValue = 0;
// Додаємо слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення
// лічильника.
const decrement = () => {
    counterValue -= 1;
    counterSpan.textContent = counterValue;
}
const increment = () => {
    counterValue += 1;
    counterSpan.textContent = counterValue;
}
// Оновлюєємо інтерфейс новим значенням змінної counterValue.
addCounterButton.addEventListener(`click`, decrement);
remCounterButton.addEventListener(`click`, increment);





