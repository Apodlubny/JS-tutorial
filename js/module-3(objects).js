// ============================================================================================
//   ----------Task 1(Ищем друга по имени)------------

/*
 *
 */
// **************************************
// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: false },
//   { name: "Ajax", online: false },
// ];

// console.table(friends);
// const findFriendByName = function (allFriends, friendName) {
//   for (const friend of allFriends) {
//     if (friend.name === friendName) {
//       return `Друг ${friendName} найден!`;
//     }
//   }
//   return `Друг ${friendName} не найден!`;
// };
// console.log(findFriendByName(friends, "Poly"));
// console.log(findFriendByName(friends, "Chelsy"));
// **************************************

// ============================================================================================

// ============================================================================================
//   ----------Task 2(Получаем имена всех друзей)------------

/*
/*
 * 
 */ // **************************************
// const getAllNames = function (allFriends) {
//   const names = [];
//   for (const friend of allFriends) {
//     console.log(friend.name);
//     names.push(friend.name);
//   }
//   return names;
// };
// console.log(getAllNames(friends));
/// **************************************

// ============================================================================================
// ============================================================================================
//   ----------Task 3(Получаем имена только друзей которые онлайн)------------
/// **************************************
// const getOnlineFriends = function (allFriends) {
//   const onlineFriends = [];
//   for (const friend of allFriends) {
//     if (friend.online) {
//       onlineFriends.push(friend);
//     }
//   }
//   return onlineFriends;
// };
// console.log(getOnlineFriends(friends));
/// **************************************
// ============================================================================================

// ============================================================================================
//   ----------Task 4(Работем с коллекцией товаров в корзине:)------------

/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */
/// **************************************

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }

//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };

//     this.items.push(newProduct);
//   },
//   remove(productName) {
//     const { items } = this;

//     for (let i = 0; i < items.length; i += 1) {
//       const item = items[i];

//       if (productName === item.name) {
//         console.log("нашли такой продукт ", productName);
//         console.log("индекс: ", i);

//         items.splice(i, 1);
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     const { items } = this;
//     let total = 0;

//     for (const { price, quantity } of items) {
//       total += price * quantity;
//     }

//     return total;
//   },
//   increaseQuantity(productName) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }
//   },
//   decreaseQuantity(productName) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity -= 1;
//         return;
//       }
//     }
//   },
// };

// console.table(cart.getItems());

// cart.add({ name: "🍎", price: 50 });
// cart.add({ name: "🍇", price: 60 });
// cart.add({ name: "🍋", price: 60 });
// cart.add({ name: "🍋", price: 60 });
// cart.add({ name: "🍓", price: 110 });
// cart.add({ name: "🍓", price: 110 });
// cart.add({ name: "🍓", price: 110 });

// console.table(cart.getItems());

// console.log("Total: ", cart.countTotalPrice());

// cart.remove("🍇");
// console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());

// console.log("Total: ", cart.countTotalPrice());

// cart.increaseQuantity("🍎");
// console.table(cart.getItems());

// cart.decreaseQuantity("🍋");
// cart.decreaseQuantity("🍋");
// console.table(cart.getItems());
// /// **************************************
// ============================================================================================

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
  // Ключ
  console.log(key);
  // Значение свойства с таким ключом
  console.log(book[key]);
}
