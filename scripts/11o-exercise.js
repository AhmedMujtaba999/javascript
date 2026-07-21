// const array = ['hello', 'world', 'search', 'good', 'search']
// //const array=['not', 'found'];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] === 'search') {
//         console.log(i);
//         break;
//     }
//     // else if(array[i]!=='search'){
//     // console.log('-1');
//     // }
// }

function findIndex(array, word) {
    const search = word;
    for (let i = 0; i < array.length; i++) {

        if (array[i] === search) {
            return i;
            break;
        }
       
    }
     for (let i = 0; i < array.length; i++) {

        if (array[i] !== search) {
            return -1;
            break;
        }
       
    }

}

// console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'));
console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'));