// // ============================================================================================
// /*
//  * Array.prototype.map()
//  * - Поэлементо перебирает оригинальный массив
//  * - Не изменяет оригинальный массив
//  * - Возвращает новый массив такой же длины
//  */

// const numbers = [5, 10, 15, 20, 25];

// const doubledNums = numbers.map((number) => {
//   return number * 3;
// });
// // console.log('numbers', numbers);
// // console.log('doubledNums', doubledNums);

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];
// console.table(players);

// /*
//  * Получаем массив имён всех игроков
//  */

// const playerNames = players.map((player) => player.name);
// console.log("playerNames", playerNames);

// const playerIds = players.map((player) => player.id);
// // console.log('playerIds', playerIds);

// // const res = players.map(({ name, online }) => ({ name, online }));
// // console.log('res', res);

// /*
//  * Увеличиваем кол-во поинтов каждого игрока на 10%
//  */

// const upatedPlayers = players.map((player) => ({
//   ...player,
//   points: player.points * 1.1,
// }));

// // console.table(upatedPlayers);
// // console.log(upatedPlayers);

// /*
//  * Увеличиваем кол-во часов игрока по id
//  */

// const playerIdToUpdate = "player-3";

// const updatedPlayers = players.map((player) => {
//   if (playerIdToUpdate === player.id) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 100,
//     };
//   }

//   return player;
// });

// const updatedPlayers = players.map(player =>
//   playerIdToUpdate === player.id
//     ? { ...player, timePlayed: player.timePlayed + 100 }
//     : player,
// );
// console.table(updatedPlayers);
// ============================================================================================
const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

// Example 1 - Метод map
// Пусть функция getModels возвращает массив моделей (поле model) всех автомобилей.

// const getModels = (cars) => cars.map(({ model }) => model);

// console.table(getModels(cars));

// Example 2 - Метод map
// Пусть функция makeCarsWithDiscount возвращает новый массив объектов с изменным значением свойства price в зависимости от переданной скидки.

// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map((car) => {
//     return {
//       ...car,
//       model: car.model,
//       oldPrice: car.price,
//       newPrice: car.price - car.price * discount,
//     };
//   });

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));
// ============================================================================================
// Example 3 - Метод filter
// Пусть функция filterByPrice возвращает массив автомобилей цена которых меньше чем значение параметра threshold.

// const filterByPrice = (cars, threshold) =>
//   cars.filter(({ price }) => price <= threshold);

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));
// ============================================================================================
// Example 4 - Метод filter
// Пусть функция getCarsWithDiscount возвращает массив автомобилей свойство onSale которых true.

const getCarsWithDiscount = (cars) => cars.filter(({ onSale }) => onSale);

// console.table(getCarsWithDiscount(cars));
// ============================================================================================
// Example 5 - Метод filter
// Пусть функция getCarsWithType возвращает массив автомобилей тип которых совпадает со значением параметра type.

// const getCarsWithType = (cars, carType) =>
//   cars.filter(({ type }) => type === carType);

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));
// ============================================================================================
// Example 6 - Метод find
const getCarByModel = (cars, model) => cars.find((car) => car.model === model);

// console.log(getCarByModel(cars, "F-150"));
// console.log(getCarByModel(cars, "CX-9"));
// ============================================================================================
// Example 7 - Метод sort
// Пусть функция sortByAscendingAmount возвращает новый массив автомобилей отсортированный по возврастанию значения свойства amount.

// const sortByAscendingAmount = (cars) =>
//   [...cars].sort((a, b) => a.price - b.price);

// console.table(sortByAscendingAmount(cars));
// ============================================================================================
// Example 8 - Метод sort
// Пусть функция sortByDescendingPrice возвращает новый массив автомобилей отсортированный по убыванию значения свойства price.

// const sortByDescendingPrice = (cars) =>
//   [...cars].sort((a, b) => b.price - a.price);

// console.table(sortByDescendingPrice(cars));
// ============================================================================================
// Example 9 - Метод sort
// Пусть функция sortByModel возвращает новый массив автомобилей отсортированный по названию модели в алфавитном и обратном алфавитном порядке, в засисимости от значения параметра order.

// const sortByModel = (cars, order) =>
//   [...cars].sort((a, b) =>
//     order === 'desc'
//       ? b.model.localeCompare(a.model)
//       : a.model.localeCompare(b.model)
//   );

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));
// ============================================================================================

// Example 10 - Метод reduce
// Пусть функция getTotalAmount возвращает общее количество автомобилей(значение свойств amount).

// const getTotalAmount = (cars) => cars.reduce((acc, car) => acc + car.amount, 0);

// console.log(getTotalAmount(cars));
// ============================================================================================

// Example 11 - Цепочки методов
// Пусть функция getAvailableCarNames возвращает массив моделей автомобилей, но только тех, которые сейчас на распродаже.

// const getModelsOnSale = (cars) =>
//   cars.filter(({ onSale }) => onSale).map(({ model }) => model);

// console.table(getModelsOnSale(cars));
// ============================================================================================

// Example 12 - Цепочки методов
// Пусть функция getSortedCarsOnSale возвращает массив автомобилей на распродаже (свойство onSale), отсортированных по возрастанию цены.

// const getSortedCarsOnSale = (cars) =>
//   cars.filter(({ onSale }) => onSale).sort((a, b) => a.price - b.price);

// console.table(getSortedCarsOnSale(cars));
// ============================================================================================
// ============================================================================================
// ============================================================================================
// ============================================================================================
/*
 * Array.prototype.filter()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает новый массив (с элементами или пустой)
 * - Добавляет в возвращаемый массив элементы которые удовлетворяют условию коллбек-функции
 *    - если коллбек вернул true элемент добавляется в возвращаемый массив
 *    - если коллбек вернул false элемент НЕ добавляется в возвращаемый массив
 */
// ============================================================================================

// const numbers = [5, 10, 15, 20, 25];

// const filteredNumbers = numbers.filter((number) => number < 10 || number > 20);
// // console.log(filteredNumbers);

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 280, points: 48, online: true },
// ];

/*
 * Получаем массив всех онлайн игроков
 */

// const onlinePlayers = players.filter(({ online }) => online);
// // console.table(onlinePlayers);

// /*
//  * Получаем массив всех оффлайн игроков
//  */

// const offlinePlayers = players.filter((player) => !player.online);
// // console.table(offlinePlayers);

// /*
//  * Получаем список хардкорных игроков с временем больше 250
//  */

// const hardcorePlayers = players.filter((player) => player.timePlayed > 250);
// console.table(hardcorePlayers);
// ============================================================================================
/*
 * Array.prototype.find()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает первый элемент удовлетворяющий условию или undefined
 */

// const numbers = [5, 10, 15, 20, 25];

// const number = numbers.find((number) => number === 10);
// console.log(number);

// ============================================================================================
/*
 * Ищем игрока по id
 */
// const playerIdToFind = "player-3";
// const playerWithId = players.find(({ id }) => id === playerIdToFind);
// // console.log(playerWithId);

// const finPlayerById = (allPlayer, playerId) => {
//   return allPlayer.find(({ id }) => id === playerId);
// };

// console.log(finPlayerById(players, 'player-1'));
// console.log(finPlayerById(players, 'player-4'));

/*
 * Ищем игрока по имени
 */
// const playerNameToFind = "Poly";
// const playerWithName = players.find(
//   (player) => player.name === playerNameToFind
// );
// console.log(playerWithName);

// ============================================================================================

/*
 * Array.prototype.every()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает true если все элементы массива удовлетворяют условию
 */

// const isAllOnline = players.every((player) => player.online);
// console.log('isAllOnline: ', isAllOnline);

/*
 * Array.prototype.some()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает true если хотя бы один элемент массива удовлетворяет условию
 */
// const isAnyOnline = players.some((player) => player.online);
// console.log("isAnyOnline: ", isAnyOnline);

// const anyHardcorePlayers = players.some((player) => player.timePlayed > 400);
// console.log("anyHardcorePlayers: ", anyHardcorePlayers);
// ============================================================================================
/*
 * Array.prototype.reduce()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает что угодно 🤯
 * - Заменяет всё на свете, но использовать нужно с умом
 */

const numbers = [5, 10, 15, 20, 25];

const total = numbers.reduce((acc, number) => acc + number, 0);
// console.log(total);

// accumulator = 0 -> number = 5 -> return 0 + 5
// accumulator = 5 -> number = 10 -> return 5 + 10
// accumulator = 15 -> number = 15 -> return 15 + 15
// accumulator = 30 -> number = 20 -> return 30 + 20
// accumulator = 50 -> number = 25 -> return 50 + 25

/*
 * Считаем общую зарплату
 */

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};
// 1 способ
// let totalSalary = 0;
// // const values = Object.values(salary);
// for (const value of Object.values(salary)) {
//   totalSalary += value;
// }
// 2 способ reduce
const totalSalary = Object.values(salary).reduce(
  (total, value) => total + value,
  0
);

// console.log(totalSalary);

/*
 * Считаем общее количество часов
 */

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
  { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
];

const totalTimePlayed = players.reduce(
  (totalTime, player) => totalTime + player.timePlayed,
  0
);

// console.log(totalTimePlayed);

/*
 * Считаем общую сумму товаров корзины
 */
// const cart = [
//   { label: "Apples", price: 100, quantity: 2 },
//   { label: "Bananas", price: 120, quantity: 3 },
//   { label: "Lemons", price: 70, quantity: 4 },
// ];

// const totalAmount = cart.reduce(
//   (total, { price, quantity }) => total + price * quantity,
//   0
// );

// console.log(totalAmount);

/*
 * Собираем все теги из твитов
 */
const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
console.log(allTags);

// acc = [], tweet.tags = ['js', 'nodejs'] return [...[], ...['js', 'nodejs']]
// acc = ['js', 'nodejs'] tweet.tags ['html', 'css']
// return  [...['js', 'nodejs'], ...['html', 'css']]
//  ['js', 'nodejs', 'html', 'css']

/*
 * Ведём статистику тегов
 */
// const tagsStats = allTags.reduce((acc, tag) => {
//   console.log(acc);

//   if (acc[tag]) {
//     acc[tag] += 1;

//     return acc;
//   }

//   acc[tag] = 1;

//   return acc;
// }, {});

const tagsStats = allTags.reduce((acc, tag) => {
  return {
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  };
}, {});
console.log(tagsStats);

// если свойство с ключом tag есть. увеличить его значение на 1
// если свойствоства нет с таким ключом что в tag, сделать и записать 1
// ============================================================================================
