function removeEgg(foods) {
    let array = [];
    for (let i = 0; i < foods.length; i++) {
        if (foods[i] === 'egg') {
            continue;
        }else{
        array.push(foods[i]);
        }
    }
    return array;
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));