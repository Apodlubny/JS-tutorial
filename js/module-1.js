// /                            ----------Task 1------------
//  * Напиши скрипт обработки покупки в магазине.
//  *
//  * - Баланс пользователя хранится в переменной balance
//  * - Сумма покупки хранится в переменной payment
//  *
//  * - Перед проверкой вывести сообщение:
//  * «Общая стоимость заказа [число] кредитов. Проверяем кол-во доступных средств на счету»
//  *
//  * - Если сумма покупки не превышает баланс:
//  *    - Вычесть из баланса сумму покупки
//  *    - Вывести сообщение «На счету осталось [число] кредитов»
//  * - Если сумма покупки превышает баланс:
//  *    - Вывести сообщение «На счету недостаточно средств для проведения операции!»
//  * - В конце вывести сообщение «Операция завершена»
//  */
// *******************
// let balance = 15000;
// const payment = 3400;
// console.log(
//   `Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету...`
// );
// if (balance >= payment) {
//   balance -= payment;
//   console.log(`На счету осталось ${balance} кредитов`);
// } else {
//   console.log("На счету недостаточно средств для проведения операции!");
// }
// console.log("Операция завершена");
// 'Все хорошо, снимаем деньги... Спасибо за покупку!'
// *******************
// ============================================================================================

// ============================================================================================
//                              ----------Task 2------------
// Напиши скрипт выбора стоимости отеля по количеству звезд 1-20$, 2-30$, 3-50$, 4 - 70$, 5 -120$
// Если в переменной   stars что-то кроме чисел 1-5 выведи строку "Такого количества звезд нет"

// *******************
// const stars = 7;
// let price;

// switch (stars) {
//   case 1:
//     price = 20;
//     break;
//   case 2:
//     price = 30;
//     break;
//   case 3:
//     price = 50;
//     break;
//   case 4:
//     price = 70;
//     break;
//   case 5:
//     price = 120;
//     break;
//   default:
//     console.log("Такого количества звезд нет");
// }
// console.log(price);
// ***********************
// ============================================================================================

// ============================================================================================
//                          ----------Task 3------------
/*
 * Напиши скрипт выбора опции доставки товара.
 * Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта
 *
 * В переменную message записать сообщение в зависимости от опции.
 * - 'Вы сможете забрать товар завтра с 12:00 в нашем офисе'
 * - 'Курьер доставит заказ завтра с 9:00 до 18:00'
 * - 'Посылка будет отправлена сегодня'
 * - 'Вам перезвонит менеджер'
 */
// ***************************
//  1. сделать переменные
// const option = 1526;
// let message = "";

// 2. сделать switch 1 2 3
// 3. в каждом кейсе записать в message строку
// switch (option) {
//   case 1:
//     message = "Вы сможете забрать товар завтра с 12:00 в нашем офисе";
//     break;

//   case 2:
//     message = "Курьер доставит заказ завтра с 9:00 до 18:00";
//     break;

//   case 3:
//     message = "Посылка будет отправлена сегодня";
//     break;

//   default:
//     message = "Вам перезвонит менеджер";
// }
// 4. сделать лог message
// console.log(message);
// ***************************
// ============================================================================================

// ============================================================================================
//                           ----------Task 4------------
// * Напиши скрипт который подсчитывает общую сумму зарплат работников.
//  * Кол-во работников хранится в перемнной employees.
//  * Зарплата каждого работника это случайное число от 500 до 5000
// //  * Записать сумму в переменную totalSalary и вывести в консоль
// ***************************
// const employees = 7;
// const minSalary = 500;
// const maxSalary = 5000;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary
//   );
//   console.log(`Зарплата работника № ${i} - ${salary}`);
//   totalSalary += salary;
// }
// console.log(`Общая зарплата - ${totalSalary}`);
// // ***************************
// ============================================================================================

// ============================================================================================
//                           ----------Task 5------------
/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят в диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */
// ***************************
// const min = 6;
// const max = 13;
// let total = 0;
// for (let i = min; i <= max; i += 1) {
//   if (i % 2 === 0) {
//     total += i;
//     console.log(`Четное - ${i}`);
//   }
// }
// console.log(total);

// variant2

// const min = 6;
// const max = 13;
// let total = 0;
// for (let i = min; i <= max; i += 1) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   total += i;
//   console.log(`Четное - ${i}`);
// }
// console.log(total);
// ***************************
// ============================================================================================

// ============================================================================================
//                               ----------Task 6------------
// * Напиши скрипт подсчёта суммы покупки со скидкой в зависимости
//  * от потраченной суммы за всё время (партнёрская программа).
//  *
//  * - Общая сумма потраченного хранится в переменной totalSpent
//  * - Сумма текущего платежа хранится в переменной payment
//  * - Скидка хранится в переменной discount
//  *
//  * - Если потрачено от [100 до 1000) - бронзовый партнёр, скидка 2%
//  * - Если потрачено от [1000 до 5000) - серебрянный партрёр, скидка 5%
//  * - Если потрачено больше [5000 - золотой партрёр, скидка 10%
//  * - Если потрачено меньше 100) - не партнёр, скидка 0%
//  *
//  * - В результате вывести сообщение
//  * «Оформляем заказ на сумму [сумма] со скидкой [скидка]%»
//  */
// ***************************
// let totalSpent = 10000;
// let payment = 500;
// let discount = 0;
// if (totalSpent >= 100 && totalSpent < 1000) {
//   console.log("Бронзовый партнер, скидка 2%");
//   discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//   console.log("Серебрянный партнер, скидка 5%");
//   discount = 0.05;
// } else if (totalSpent >= 5000) {
//   console.log("Золотой партнер, скидка 10%");
//   discount = 0.1;
// } else {
//   console.log("Не партнёр, скидка 0%");
// }

// payment -= payment * discount;
// // payment = payment - payment * discount;

// console.log(
//   `Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`
// );

// totalSpent += payment;

// console.log(`Общая сумма потраченого в магазине: ${totalSpent}`);
// ***************************
// ============================================================================================

// ============================================================================================
// ----------Task 7 взаимодействие с интерфейсом------------
// const btnAdd = document.querySelector("button[data-add]");
// const resetBtn = document.querySelector("button[data-reset]");
// const valueInput = document.querySelector("input[data-value]");
// const outputEl = document.querySelector(".js-output span");

// let total = 0;

// btnAdd.addEventListener("click", function () {
//   const value = Number(valueInput.value);

//   total += value;
//   outputEl.textContent = total;
//   valueInput.value = "";
// });

// resetBtn.addEventListener("click", function () {
//   total = 0;
//   outputEl.textContent = total;
// });
// ============================================================================================
// возведение числа в степень
// let base = Number(prompt("Давай число"));
// let power = Number(prompt("Давай степень"));
// let res = Math.pow(base, power);
// console.log(res);
