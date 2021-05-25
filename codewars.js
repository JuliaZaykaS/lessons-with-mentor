// function killer(suspectInfo, dead) {
//     for (let suspect of Object.keys(suspectInfo)) {
//         for (let value of Object.values(suspectInfo)) {
//             for (let i = 0; i < value.length; i += 1) {

//                 if (value.includes(dead[i])) {
//                     return suspect;
//                 }
//             }
//             // if (deepEqual(value, dead)) {
//             //     return suspect;
//             // }

//         }
//     }

//     //your code here...
// }


// console.log((killer({ 'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle'] }, ['Lucas', 'Bill']), 'James'));
// console.log((killer({ 'Brad': [], 'Megan': ['Ben', 'Kevin'], 'Finn': [] }, ['Ben']), 'Megan'));

// function iTri(s){
//   const triathlonProgram = {
//         swim: 2.4,
//         bike: 112,
//         run: 26.2,
//     }
//     let totalDistance = 0;
//     for (let value of Object.values(triathlonProgram)) {
//         totalDistance += value;
//     }
//     let message = {};

//         if (s === 0) { message = 'Starting Line... Good Luck!' }
//         else if (s > 0 && s <= 2.4) { message.Swim = `${(totalDistance - s).toFixed(2)} to go!` }
//         else if (s > 2.4 && s <= 114.4) { message.Bike = `${(totalDistance - s).toFixed(2)} to go!` }
//         else if (s > totalDistance - 26.2 && s < totalDistance - 10) { message.Run = `${(totalDistance - s).toFixed(2)} to go!` }
//         else if (s >= totalDistance - 10 && s < totalDistance) { message.Run = `Nearly there!` }
//         else { message = "You're done! Stop running!" };

//     return message;
// }
// console.log(iTri(1));

// function scoreboard(string) {
//   const stringNumbers = {'one':1, 'two':2, 'three':3, 'four':4, 'five':5, 'six':6, 'seven':7, 'eight':8, 'nine':9, 'nil': 0};
//   // let score = [];
//   const arrayNumbers = Object.entries(stringNumbers);
//   const arrayKeys = Object.keys(stringNumbers);
//   const arrayValues = Object.values(stringNumbers);

//   console.log(arrayKeys);
//   const arrayString = string.split(' ');
//   // console.log(arrayString);
//   // const result = arrayKeys.reduce((acc, word, index) => {
//   //   if (arrayString.include)
//   // });
//   const res = arrayString.filter((word) => {
//     // return arrayKeys.indexOf(word);
//     if (arrayKeys.includes(word)) return word;
//   });
//   console.log(res);
//   const score = res.map((el) => {
//   return el = arrayValues[arrayKeys.indexOf(el)];

//   })

// //     for (let i = 0; i < Object.keys(stringNumbers).length; i += 1){
// //     //   console.log(i);
// //     for (let j = 0; j<string.split(' ').length; j+=1 ){
// // // console.log(j);
// //         if (string.split(' ')[j] === (Object.keys(stringNumbers)[i])) {
// //             // console.log(string.split(' '));
// //             // console.log(Object.keys(stringNumbers));
// // //   if(string.split(' ')[j].includes(Object.keys(stringNumbers)[i])){
// //             score.push(Object.values(stringNumbers)[i]);
// //             console.log(Object.values(stringNumbers)[i]);
// //   };
// //     };

// //   };
//   return score;

// };

// console.log(scoreboard("new score: three two "));
// console.log(scoreboard("two two "));
// console.log(scoreboard("two four "));

// console.log(scoreboard("new score: nine two "));

// function wordscore(word) {
//   const letters = {"a" : 1, "b" : 3,"c" : 3,"d" : 2, "e" : 1, "f" : 4,"g" : 2,"h" : 4,"i" : 1,"j" : 8,"k" : 5,"l" : 1,"m" : 3,"n" : 1,"o" : 1,"p" : 3,"q" : 10,"r" : 1,"s" : 1,"t" : 1,"u" : 1,"v" : 4, "w" : 4,"x" : 8,"y" : 4,"z" : 10};
//   const wordArray = word.split('');
//   const result = wordArray.reduce((acc, letter)=> {
//       for (let i = 0; i < Object.keys(letters).length; i += 1){
//           for (let j = 0; j < wordArray.length; j += 1){

//               if (wordArray[j].includes(Object.keys(letters)[i])){
//                 acc+=Object.values(letters)[i];
//               };
//           };

//       };

//     return acc;

//   }, 0)
// if (wordArray.length === 7) {
//           return result + 50;
//     } else { return result };

// };

// console.log(wordscore('great'));
// console.log(wordscore('deceive'));
// // 2+1+3+1+1+4+1=13

// function ballCollector(detritus) {
//   const sack = { weight: 0 };
//   let total = 0;
//   detritus.forEach((elem) => {
//     if (elem > 60) return;
//     else if (elem === 58) {
//       total += elem;
//     }
//     return sack.weight = total;
//     // console.log(total);

//   })
//   return sack;
// }
// console.log(ballCollector([58, 68, 62, 69, 58]));

// function maxPossibleScore(obj, arr) {

//   const questions = Object.keys(obj);
//   const points = Object.values(obj);

//   const newPoints = points.map((num, index) => {
//     // if (arr === []) return num;
//     if (arr.length === 0) return num;

//     if (arr.length !== questions.length ) {
//       for (let i = 0; i < arr.length; i += 1) {
//         if (questions[index] === arr[i]) {
//           return num *= 2;

//         } else return num;
//       }
//     };
//     if (arr.length === questions.length ) {

//       // for (let i = 0; i < arr.length; i += 1) {
//         if (questions[index] === arr[index]) {
//           return num *= 2;

//         } else return num;
//       // }
//     }
//     }

//   );
//   console.log(newPoints);
//   const total = newPoints.reduce((acc, elem) => acc + elem, 0);
//   // const total = points.reduce((acc, elem) => {
//   //   if (arr === []) return acc+elem;
//   //   if (arr !== []) {
//   //     for (let i = 0; i < questions.length; i += 1) {
//   //       for (let j = 0; j < arr.length; j += 1) {
//   //         if (arr[j] === points[i]) {
//   //           console.log(points[i]);
//   //           return acc + points[i] * 2;
//   //         };

//   //       };

//   //     };
//   //   };
//   // }, 0);
//   return total;
// };
// return total;
// }
// function maxPossibleScore(obj, arr) {

//   const questions = Object.keys(obj);
//   const points = Object.values(obj);

//   const newPoints = points.map((num, index) => {

//     if (arr.length === 0) return num;

//     if (arr.length !== questions.length) {
//       for (let i = 0; i < arr.length; i += 1) {
//         if (questions[index].toLowerCase() === arr[i].toLowerCase()) {
//           return num *= 2;

//         } else return num;
//       }
//     };
//     if (arr.length === questions.length) {


//       if (questions[index].toLowerCase() === arr[index].toLowerCase()) {
//         return num *= 2;

//       } else return num;

//     }
//   }

//   );
//   console.log(newPoints);
//   const total = newPoints.reduce((acc, elem) => acc + elem, 0);

//   return total;
// };

// console.log(maxPossibleScore({ "a": 1 }, []));
// console.log(maxPossibleScore({ "a": 1 }, ["a"]));
// console.log(maxPossibleScore({ "a": 1, "b": 14 }, ["b"]));
// console.log(maxPossibleScore({ "a": 2, "b": 5, "c": 8 }, ["c"]));
// console.log(maxPossibleScore({ "a": 1, "b": 2, "c": 4 }, ["a", "b", "c"]));
// console.log(maxPossibleScore({ "a": 10000, "b": 100, "C": 800 }, ["A", 'B', 'C']));
// console.log(maxPossibleScore({ "a": 177127.3401062134, "b": 897.6306811659335, "c": 5 }, ["a", "b", "c"]));

// const array = {
//   first() {
//     return this[0];
//   },
//   last() {
//     return this[this.length - 1];
//   },
// };

// console.log([2,5,7,3,4].first());
// function Dog (name, breed, sex, age) {
//     this.name  = name;
//     this.breed = breed;
//     this.sex   = sex;
//     this.age   = age;
//     this.bark = function () {
//     return 'Woof!';
//   };
// };

// const apollo = new Dog('Apollo', 'Dobermann', 'male', '4');
// const zeus = new Dog('Zeus', 'Dobermann', 'male', '4');
// console.log(apollo);
// console.log (apollo.bark());
// zeus.bark();

// function rapNameGen(dob) {
//   const arrayOfDates = dob.split('.');
//   const arrayFirstNumbers = arrayOfDates[0].split('');
//   const middleOfFirstNumber = Math.round((Number(arrayFirstNumbers[0]) + Number(arrayFirstNumbers[1])) / arrayFirstNumbers.length);
//   const arrayLastNumbers = arrayOfDates[arrayOfDates.length - 1].split('');
//   const middleOfLastNumber = Math.round((Number(arrayLastNumbers[0]) + Number(arrayLastNumbers[1])) / arrayLastNumbers.length);
//   const objTextNumbers = { 'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eigth': 8, 'nine': 9 };
//   let firstWord = '';
//   let lastWord = '';
//   Object.values(objTextNumbers).forEach((elem, index) => {
//     if (elem === middleOfFirstNumber) {

//       firstWord = `${elem}${Object.keys(objTextNumbers)[index].split('').slice(1).join('')}`
//     };
//   });

//   Object.values(objTextNumbers).forEach((elem, index) => {
//     if (elem === middleOfLastNumber) {
//       lastWord = `${elem}${Object.keys(objTextNumbers)[index].split('').slice(1).join('')}`
//     };
//   });

//   return `${firstWord} ${lastWord}`;

// };

// console.log(rapNameGen('23.11.93'));

// function well(x) {
//   let arrayOfAllIdeas = [];
//   for (let array of x) {
//     arrayOfAllIdeas.push(...array);
//   }

  // const arrayOfAllIdeas = x.flat();
  // const arrayOfAllIdeas = x.reduce((accum, el) => {
  //   return accum = [...el];
  // },[]);

//   const countGoodIdeas = arrayOfAllIdeas.reduce((acc,elem)=>{
//     if(String(elem).toLowerCase() === 'good') return acc + 1;
//     else return acc;
//   }, 0);

//   console.log(countGoodIdeas);
//   if(countGoodIdeas === 0) return 'Fail!';
//   if(countGoodIdeas === 1 || countGoodIdeas === 2 ) return 'Publish!';
//   if(countGoodIdeas > 2) return 'I smell a series!';


// };

// console.log(well([['gOOd', 'bad', 'BAD', 'bad', 'bad'], ['bad', 'bAd', 'bad'], ['GOOD', 'bad', 'bad', 'bAd']]));

// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// const objC = { a: 5, d: 11, e: 8 }
// const objD = { c: 3 }

// function combine(...args) {
//   const resultObj = {};
//   const arrayOfObj = [...args];
//   console.log(arrayOfObj);
// // const newArr = arrayOfObj.flatMap((obj)=>{})


//   const newArr = arrayOfObj.map((obj) => Object.entries(obj)).flat();
//   console.log(newArr);
//   // const result = newArr.forEach((elem) => {

//   //   elem.reduce((acc, el) => {
//   //   // for (let i = 0; i < newArr.length; i += 1) {
//   //     if (el[0] === ) return acc + el[i][1];
//   //   // else return acc;}
//   // }, 0);
//   // })
//   // const sortedNewArr = newArr.sort((arr1, arr2) => arr2.length - arr1.length);
//   // console.log(sortedNewArr);

//   // const result = sortedNewArr.forEach((arr)=>{})
//   // console.log(newArr);
//   return result;
// //   const newObj = arrayOfObj.forEach((elem) => {
// //     return Object.keys(elem);
// //   });
// //   console.log(newObj);
// //   const a = arrayOfObj.reduce((acc) => {

// //   })
// //   return arrayOfObj;
// };

// console.log(combine(objA,objD,objB))

// const whosOnline = (friends) => {
//   const filteredArray = {
//     online: [],
//     offline: [],
//     away: [],
//   };
//   if (friends === []) return filteredArray;
//   if (friends !== []) {
//     friends.filter((friend) => {

//       if (friend.status === 'online' && friend.lastActivity <= 10) {
//         return filteredArray.online.push(friend.username);


//       }

//       else if (friend.status === 'online' && friend.lastActivity > 10) return filteredArray.away.push(friend.username);
//       else if (friend.status === 'offline' && friend.lastActivity > 10) return filteredArray.offline.push(friend.username);
//     });

//     const result = Object.values(filteredArray).filter((elem,index) => {
//       console.log(elem);
//       if (elem !== []) return Object.keys(filteredArray)[index];
//       // else delete Object.keys(filteredArray)[index];
//     })
// //     for (let elem of Object.values(filteredArray)) {
// // console.log(elem);
// //       if (elem === []) delete elem;



// //     };
//     return filteredArray;
//   };
// }
//   console.log(whosOnline([{
//     username: 'David',
//     status: 'online',
//     lastActivity: 10
//   }, {
//     username: 'Lucy',
//     status: 'offline',
//     lastActivity: 22
//   }, {
//     username: 'Bob',
//     status: 'online',
//     lastActivity: 104
//   }]));
//   console.log(whosOnline([{
//     username: 'Lucy',
//     status: 'offline',
//     lastActivity: 22
//   }, {
//     username: 'Bob',
//     status: 'online',
//     lastActivity: 104
//   },
//   {
//     username: 'ob',
//     status: 'online',
//     lastActivity: 104
//   }]));


// function playerManager(players) {
//   const playersList = [];
//   // const playerCard = {
//   //   player: '',
//   //   contact: '',
//   // };

//   const str = players.split(', ');
//   console.log(str);
//   const res = str.reduce((acc, el, index) => {
//     let player;
//     let contact;
//     if (index % 2 === 0) {
//       // player = el;
//       acc={player:el}
//     } else /*if (index % 2 !== 0 )*/ acc = { contact: el };
//     console.log({ player:player, contact:contact });
//     return acc.push({ player:player, contact:contact })
//     console.log(playerCard);


//     // return acc.push(playerCard);

//   },{})
//   // for (let i = 0; i < str.length; i += 1){
//   //   if (i % 2 === 0) {
//   //     playerCard.player = str[i];
//   //   } else playerCard.contact = str[i];
//   // }
//   return res;
// //   const res = str.
// };

// console.log(playerManager("John Doe, 8167238327, Jane Doe, 8163723827"));

// function calorie (member){
//   const commonRmr = 10*member[4] + 6.25*member[3] - 5*member[2];
//   let rmr = 0;
//   let totalKcal=0;
// if(member[1]==='f') rmr = commonRmr - 161;
//   else rmr = commonRmr + 5;
// if(member[5] === 'little activity') totalKcal= rmr*1.2;
// else if(member[5] === 'moderately active') totalKcal= rmr*1.55;
// else if(member[5] === 'very active') totalKcal= rmr*1.7;
//   else totalKcal = rmr * 1.9;
//   console.log(totalKcal);

// return `${member[0]}´s daily calorie requirement is ${totalKcal.toFixed(2)} kcal.`
// };

// console.log(calorie(["Sandra", "f", 17, 165, 61, "extremely active"]));

// const object = {
//   string: 'Hello, World!',
//   contains(substr, boolean) {
//     if (this.string.toLowerCase().includes(substr.toLowerCase()) && boolean === '') return true;
//     else if (!this.string.toLowerCase().includes(substr.toLowerCase()) && boolean === '') return false;
//     else if (this.string.toLowerCase().includes(substr.toLowerCase()) && boolean !== '') return true;
//     else return false;

//   },
// };

  const contains = (substr, boolean) => {
    if(this.string.toLowerCase().includes(substr.toLowerCase())&& boolean ==='') return true;
    else if (!this.string.toLowerCase().includes(substr.toLowerCase())&& boolean ==='')return false;
    else if(this.string.toLowerCase().includes(substr.toLowerCase())&& boolean!=='') return true;
    else return false;

  }

console.log(('Hello, World!'.contains('Hel')));
console.log(('Hello, World!'.contains('wor')));
console.log(('Hello, World!'.contains('wor', true)));
console.log(('Hello, World!'.contains('a')));