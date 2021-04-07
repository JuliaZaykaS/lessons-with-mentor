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

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Пиши код ниже этой строки
//   let arrayValues = [];
//   for (let product of products) {
//     for (let key of Object.keys(product)) {
//       if (key === propName){
//       arrayValues.push(product[key]);

//       // return arrayValues;
//       // console.log(arrayValues);
//     }
//     }

// // return arrayValues;

// }
// // return [];
// return arrayValues;

//   // Пиши код выше этой строки
// }

// console.log(getAllPropValues('name'));

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let productPrice = 0;
//   for (let product of products){
//     if(product.name === productName) {
//       productPrice = product['price']*product['quantity'];
//     }
//   }

//   return productPrice;
//   // Пиши код выше этой строки
// }
// console.log(calculateTotalPrice('Дроид'));

// function calculateMeanTemperature(forecast) {

//   const {today: {low:todayLow, high:todayHigh}, tomorrow: {low:tomorrowLow, high:tomorrowHigh}} = forecast;
//   // Пиши код выше этой строки
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));


//   function makeTask(data) {
//     const completed = false;
//     const category = 'Общее';
//     const priority = 'Обычный';
//     // Пиши код ниже этой строки
//     const newData = { category, priority, ...data, completed};
//     console.log(newData);
//     // Пиши код выше этой строки
//   }

//   console.log(makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' }));
//   console.log(makeTask({ category: 'Финансы', text: 'Забрать проценты' }));
//   console.log(makeTask({ priority: 'Низкий', text: 'Выбрать шампунь' }));
// console.log(makeTask({}));

// Пиши код ниже этой строки
// function findMatches(firstArg, ...otherArgs) {
//   const matches = []; // Не изменяй эту строку
// for (let arg of otherArgs){
// if(firstArg.includes(arg)) {
//    matches.push(arg);
//    }
// }
//   // Пиши код выше этой строки
//   return matches;
// }

// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   const potions = [];
//   // Пиши код выше этой строки
// };

// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],
//   // Пиши код ниже этой строки
//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     for (let potion of this.potions) {

//       if (potion.name === newPotion.name) {
//         return `Зелье ${newPotion.name} уже есть в инвентаре!`;
//       }
//     }
//     this.potions.push(newPotion);

//   },
//   removePotion(potionName) {
// for (let i = 0; i < this.potions.length; i+=1) {
//   if (this.potions[i].name === potionName) {

//     this.potions.splice(i, 1);
//   }

// }
// return `Зелья ${potionName} нет в инвентаре!`;



//   },


//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i+=1) {
//       if (this.potions[i].name === oldName) {
//         this.potions[i].name = newName;

//       }

//     }
//       return `Зелья ${oldName} нет в инвентаре!`;


//   },
//   // Пиши код выше этой строки
// };
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }));
// console.log(atTheOldToad.removePotion('Дыхание дракона'));
// console.log(atTheOldToad);
// console.log(atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости'));
// console.log(atTheOldToad);


// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName, onSuccess, onError) {

//     // for (let i = 0; i < pizzaPalace.pizzas.length; i += 1) {
//     //   // console.log(pizzaPalace.pizzas);
//     //   if (pizzaPalace.pizzas[i] === pizzaName) {
//     //     // console.log(pizzaPalace.pizzas[i]);
//     //     return onSuccess(pizzaName);
//     //   };
//     // }
//     // return onError(pizzaName);
//     if (!pizzaPalace.pizzas.includes(pizzaName)) {
//       return onError(pizzaName);
//     }
//     return onSuccess(pizzaName);
//   },
// };
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! В ассортименте нет пиццы с названием ${error}`;
// }

// // Вызовы метода с колбэками
// console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError));
// console.log(pizzaPalace.order('Четыре нарезона', makePizza, onOrderError));
// console.log(pizzaPalace.order('Биг майк', makePizza, onOrderError));
// console.log(pizzaPalace.order('Венская', makePizza, onOrderError));;

const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

// Пиши код ниже этой строки
function composeMessage(position) {
  // let message = `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position + 1}-й в очереди.`
  // return message;
  for (let i = 0; i < this.length; i += 1) {
    // this[i].position = i + 1;
    let position = i + 1;
    // console.log(orders);
    // let message[i] = `Готовим ${this.dish} для ${this.email}. Ваш заказ ${this.position}-й в очереди.`;
  }
  // return message[i];
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${this.position}-й в очереди.`
};

console.log(composeMessage.call(orders));
// console.log(composeMessage());
// const messages = orders.map(composeMessage.call(orders));
// console.log(composeMessage.call(orders));
