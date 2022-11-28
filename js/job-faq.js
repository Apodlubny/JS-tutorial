// *********************************************
// пошук унікальних елементів
// розібрати трьма різними способами
// ===== unique items =====
// const numbers = [1, 3, 2, 1, 4, 2, 2, 1, 3, 5];

// function getUniqueItems1(arr) {
//   const res = [];

//   arr.forEach((item) => {
//     if (!res.includes(item)) {
//       res.push(item);
//     }
//   });

//   return res;
// }

// function getUniqueItems2(array) {
//   const result = [];
//   //   array.forEach((item, index) => {
//   //     if (array.indexOf(item) === index) {
//   //       result.push(item);
//   //     }
//   //   });
//   //     return result;
//   return array.filter((item, index) => array.indexOf(item) === index);
// }

// const getUniqueItems3 = (arr) => Array.from(new Set(arr));
// // console.log(getUniqueItems1(numbers));
// // console.log(getUniqueItems2(numbers));
// console.log(getUniqueItems3(numbers));

// пошук килькості елементів

const array = [1, 1, 2, 2, 3, 3, 4, 4, "hello", 5];
function getElementsQuantityObject(array) {
  const result = {};
  array.forEach((val) => {
    if (result[val]) {
      result[val] += result[val];
    } else result[val] = 1;
  });
  return result;
}
console.log(getElementsQuantityObject(array));
