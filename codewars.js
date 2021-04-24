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
//   let score = [];
//     for (let i = 0; i < Object.keys(stringNumbers).length; i += 1){
//     //   console.log(i);
//     for (let j = 0; j<string.split(' ').length; j+=1 ){
// // console.log(j);
//         if (string.split(' ')[j] === (Object.keys(stringNumbers)[i])) {
//             console.log(string.split(' '));
//             console.log(Object.keys(stringNumbers));
// //   if(string.split(' ')[j].includes(Object.keys(stringNumbers)[i])){
//             score.push(Object.values(stringNumbers)[i]);
//             console.log(Object.values(stringNumbers)[i]);
//   };
//     };

//   };
//   return score;
//   // code here!
// };

// console.log(scoreboard("new score: three two "));
// console.log(scoreboard("new score: nine two "));

function wordscore(word) {
  const letters = {"a" : 1, "b" : 3,"c" : 3,"d" : 2, "e" : 1, "f" : 4,"g" : 2,"h" : 4,"i" : 1,"j" : 8,"k" : 5,"l" : 1,"m" : 3,"n" : 1,"o" : 1,"p" : 3,"q" : 10,"r" : 1,"s" : 1,"t" : 1,"u" : 1,"v" : 4, "w" : 4,"x" : 8,"y" : 4,"z" : 10};
  const wordArray = word.split('');
  const result = wordArray.reduce((acc, letter)=> {
      for (let i = 0; i < Object.keys(letters).length; i += 1){
          for (let j = 0; j < wordArray.length; j += 1){

              if (wordArray[j].includes(Object.keys(letters)[i])){
                acc+=Object.values(letters)[i];
              };
          };

      };

    return acc;

  }, 0)
if (wordArray.length === 7) {
          return result + 50;
    } else { return result };

};

console.log(wordscore('great'));
console.log(wordscore('deceive'));
// 2+1+3+1+1+4+1=13