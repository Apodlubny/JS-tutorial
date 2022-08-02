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

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// // поиск нечетных чисел
// const number = 125;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("Нечетное i: ", i); // 1, 3, 5, 7, 9
// }
// const clients = ["Mango", "Poly", "Draw", "Ajax"];
// clients[0] = "Kiwi";
// clients[1] = "Pango";
// clients[0] = "Andy";

// const lastEl = clients.length - 1;
// console.log(clients);
// console.log(clients[lastEl]); // ["Kiwi", "Pango", "Ajax"]

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const clients = ["Mango", "Poly", "Ajax", "Andy"];
// const clientNameToFind = "andy";
// let message;

// for (const client of clients) {
//   // На каждой итерации будем проверять совпадает ли элемент массива с
//   // именем клиента. Если совпадает то мы записываем в message сообщение
//   // об успехе и делаем break чтобы не искать дальше
//   if (client === clientNameToFind) {
//     message = "Клиент с таким именем есть в базе данных!";
//     break;
//   }

//   // Если они не совпадают то запишем в message сообщение об отсутствии имени
//   message = "Клиента с таким именем нету в базе данных!";
// }

// console.log(message); // "Клиент с таким именем есть в базе данных!"

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// // и управление передаётся на следующую итерацию.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript это интересно";
// console.log(message.split(" ")); // ["JavaScript", "это", "интересно"]

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]

// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]

// console.log(numbers.pop()); //  2
// console.log(numbers); // [1]

// console.log(numbers.pop()); //  1
// console.log(numbers); // []

const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Andy", "Rocky"];
console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]
console.log(clients.slice(3, 5)); // Kiwi Andy
console.log(clients.slice(0, 1)); // Mango
console.log(clients.slice(2, 6)); // Poly, Kiwi Andy Rocky
console.log(clients.slice(3)); // Kiwi Andy Rocky;
console.log(clients.slice(-5)); // 'Ajax', 'Poly', 'Kiwi', 'Andy', 'Rocky']

const colors = ["red", "green", "blue"];

colors.splice(2, 0, "purple");
console.log(colors); // ["red", "green", "purple", "blue"]

// постчитать общую сумму
const salary = [2000, 3000, 2500, 4000, 5000, 5500];
let totalSalary = 0;
// for (let i = 0; i < salary.length; i += 1) {
//   totalSalary += salary[i];
//   console.table(salary[i]);
// }
// console.log(`Общая зарплата: ${totalSalary}`);

// второй способ с помощью for...of

// for (const salaryItem of salary) {
//   totalSalary += salaryItem;
//   console.table([salaryItem]);
// }
// console.log(`Общая зарплата: ${totalSalary}`);

// const fruits = ["apple", "peach", "pear", "banana"];

// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//   words = message.split(" ");
//   // Change code above this line
//   return words;
// }
// console.log(words);

// =================//
// 1. Объявление параметров x, y, z
// function multiply(x, y, z) {
//   console.log(`Результат умножения равен ${x * y * z}`);
// }

// 2. Передача аргументов
// multiply(2, 3, 5); // Результат умножения равен 30
// multiply(4, 8, 12); // Результат умножения равен 384
// multiply(17, 6, 25); // Результат умножения равен 2550

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   console.log(fruits);
//   for (const fruit of fruits) {
//     fruits.includes(fruit) ? "true" : "false";
//   }
//   return fruit; // Change this line
// }

// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");

// setOutput();

// select.addEventListener("change", setOutput);

// function setOutput() {
//   const selectedOptionValue = select.value;
//   const selectedOptionIndex = select.selectedIndex;
//   const selectedOptionText = select.options[selectedOptionIndex].text;

//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }
