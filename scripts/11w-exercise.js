
function findIndex(array, word) {
    for (let i = 0; i < array.length; i++) {

        if (array[i] === word) {
            return i;
        }
    }
    return -1;
}

// console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'));
console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'));

function unique(array) {
    let result = []
        for (let i = 0; i < array.length; i++) {
          const word= array[i];
          if(findIndex(result, word)===-1){
            result.push(word)
          }
        }
        return result;
}
console.log(unique(['green', 'red', 'blue', 'red']));
const array=['green','red', 'blue', 'red', 'red']
const uniqueArray = [...new Set(array)];
console.log(uniqueArray);