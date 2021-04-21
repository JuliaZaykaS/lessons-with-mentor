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

function iTri(s){
  const triathlonProgram = {
        swim: 2.4,
        bike: 112,
        run: 26.2,
    }
    let totalDistance = 0;
    for (let value of Object.values(triathlonProgram)) {
        totalDistance += value;
    }
    let message = {};

        if (s === 0) { message = 'Starting Line... Good Luck!' }
        else if (s > 0 && s <= 2.4) { message.Swim = `${(totalDistance - s).toFixed(2)} to go!` }
        else if (s > 2.4 && s <= 114.4) { message.Bike = `${(totalDistance - s).toFixed(2)} to go!` }
        else if (s > totalDistance - 26.2 && s < totalDistance - 10) { message.Run = `${(totalDistance - s).toFixed(2)} to go!` }
        else if (s >= totalDistance - 10 && s < totalDistance) { message.Run = `Nearly there!` }
        else { message = "You're done! Stop running!" };

    return message;
}
console.log(iTri(1));