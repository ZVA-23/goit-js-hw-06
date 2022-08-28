// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input)
//  і змінює інлайн - стиль span#text, оновлюючи властивість font - size.В результаті,
//     перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>


// Викликаємо input і span.
const imputElement = document.querySelector(`#font-size-control`);
const textSpanElement = document.querySelector(`#text`);
// Функція, яка змінює розмір тексту на .px в результаті перетягування повзунка.
imputElement.addEventListener(`input`, () => {
    const sizeInput = imputElement.value;
    textSpanElement.style.fontSize = sizeInput + "px";
}
)