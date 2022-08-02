// const doMath = function (a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// };
// const add = function (a, b) {
//   return a + b;
// };
// const sub = function (x, y) {
//   return x - y;
// };
// doMath(2, 3, add);
// doMath(10, 3, sub);

// // inline function
// doMath(2, 3, function (a, b) {
//   return a + b;
// });
// doMath(10, 3, function (x, y) {
//   return x - y;
// });

// ============================================================================================
/*
 * ******Array.prototype.forEach(callback(currentValue, index, array), thisArg)*********
 * - Поэлементо перебирает оригинальный массив
 * - Ничего не возвращает
 * - Заменяет классический for, если не нужно прерывать цикл
 */
// /// **************************************
// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function (number) {
//   console.log("number", number);
// });

// console.log(numbers);
// /// **************************************
// ============================================================================================
//  Example 7 - Метод forEach
// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

// const logItems = (items) => {
//   console.log(items);
//   items.forEach((item, idx) => console.log(`${idx + 1} - ${item}`));
// };

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
// ============================================================================================

// Example 8 - Метод forEach
// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');

//   // nameList.forEach((name, idx) => console.log(`${name}: ${phoneList[idx]}`));
//   nameList.forEach((_, idx) =>
//     console.log(`${nameList[idx]}: ${phoneList[idx]}`)
//   );
// }

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });
// ============================================================================================
// Example 9 - Метод forEach
// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

// function calсulateAverage(...args) {
//   let total = 0;

//   args.forEach((item) => (total += item));

//   return total / args.length;
// }

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
// ============================================================================================
