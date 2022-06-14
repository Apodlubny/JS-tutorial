"use strict";

// изменение цвета при обновлении странички
// const colors = ["tomato", "teal", "green", "blue", "yellow"];
// const max = colors.length - 1;
// const min = 0;
// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];
// console.log(color);
// document.body.style.backgroundColor = color;

// счетчик
// let counter = 0;

// while (counter < 10.2) {
//   console.log("counter: ", counter.toFixed(2));
//   counter += 0.2;
// }

// Ввведение пароля

// let password = "";

// do {
//   password = prompt("Введите пароль длиннее 4-х символов", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// for (let i = 5; i <= 50; i += 5) {
//   console.log(i);
// }

const max = 10;
for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
}

// поиск нечетных чисел
const number = 125;

for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }

  console.log("Нечетное i: ", i); // 1, 3, 5, 7, 9
}
