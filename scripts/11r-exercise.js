const foods= ['egg', 'apple', 'egg', 'egg', 'ham']
function removeEgg(foods) {
    let array = [];
    let count = 0;
    //let copy= foods.reverse().slice();
    for (let i = 0; i < foods.length; i++) {
        if (foods[i] === 'egg') {
            count++;
            if (count === 1) {
                array.push(foods[i]);
            }
            continue;
        }
        array.push(foods[i]);

    }
    return array;
}

console.log(removeEgg(foods));
console.log(foods);