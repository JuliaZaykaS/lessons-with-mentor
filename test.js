// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     let message;

//     switch (password) {
//         case null:
//             message = 'Отменено пользователем!';
//             break;

//         case ADMIN_PASSWORD:
//             message = 'Добро пожаловать!';
//             break;

//         default:
//             message = 'Доступ запрещён, неверный пароль!';
//     }
// }


//     function formatMessage(message, maxLength) {
//         let result;
//         // Пиши код ниже этой строки
//         if (message <= maxLength) {
//             result = message;
//         } else {
//             result = `${message.slice(0, maxLength)}${'...'}`
//         }
//         // Пиши код выше этой строки
//         return result;
// }

// function checkForSpam(message) {
//   let result;
//   // Пиши код ниже этой строки
//  if (message.toLowerCase.includes('spam') || message.toLowerCase.includes('sale')) {
//  result = true;
//  } else {result = false}
//   // Пиши код выше этой строки
//   return result;
// }

// function checkForSpam(message) {
//   let result;
//   // Пиши код ниже этой строки
//   const messageNormalized = message.toLowerCase;
//  if (messageNormalized.includes('spam') || messageNormalized.includes('sale')) {
//  result = true;
//  } else {result = false}
//   // Пиши код выше этой строки
//   return result;
// }

// function getExtremeElements(array) {
//     // Пиши код ниже этой строки
// //   const newArray = array.splice(1, array.length - 2);
//     const newArray = [];
//     newArray.push(array[0], array[array.length - 1]);
//   console.log(newArray);



// return newArray;

//     // Пиши код выше этой строки
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));

// function findLongestWord(string) {
//   // Пиши код ниже этой строки

//     const stringArray = string.split(' ');
//     console.log(stringArray);
//     let longestWord = stringArray[0];
//     for (let word of stringArray) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
//     return longestWord;

// }
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'))

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Пиши код ниже этой строки
// for (let i = min; i <= max; i += 1){
// numbers.push(i);
// }
//   // Пиши код выше этой строки
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));

// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   const newArray = [];
// for (let number of numbers) {
// if (number > value){
// newArray.push(number);
// }

// }
// return newArray;

//   // Пиши код выше этой строки
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// function checkFruit(fruit) {
//   const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

//   if(fruits.includes(fruit)){
//     return true;
//   }

//   return false; // Дополни эту строку
// }

// console.log(checkFruit('слива'))

// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки
//   const newArray = [];
// for (let i = 0; i < array2.length; i+=1)
//   if (array1.includes(array2[i])) {
//   newArray.push(array2[i]);
//   }

//   return newArray;
//   // Пиши код выше этой строки
// }
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Пиши код ниже этой строки
  let arrayValues = [];
  for (let product of products) {
    for (let key of Object.keys(product)) {
      if (key === propName){
      arrayValues.push(product[key]);

      // return arrayValues;
      // console.log(arrayValues);
    }
    }

// return arrayValues;

}
// return [];
return arrayValues;

  // Пиши код выше этой строки
}

console.log(getAllPropValues('name'));