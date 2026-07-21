function removeEgg(foods) {
    let array = [];
    let count = 0;
    for (let i = 0; i < foods.length; i++) {
        if (foods[i] === 'egg') {
            count++;
            if (count === 3) {
                array.push(foods[i]);
            }
            continue;
        }
        array.push(foods[i]);

    }
    return array;
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));