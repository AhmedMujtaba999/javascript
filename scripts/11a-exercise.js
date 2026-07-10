let nums = [10,20,30];
nums[2] = 99;
console.log(nums);
//console.log(getLastValue(nums));
//console.log(getLastValue(['hi', 'hello', 'good']));
console.log(arraySwap(nums));
console.log(arraySwap(['hi','helo','good']));
console.log(arraySwap(['ahmed', 'mujtaba', 'ali']));

function getLastValue(array){
return array[array.length - 1];
}

function arraySwap(array){
    let swap= '';
    swap = array[array.length -1];
    array[array.length -1 ] = array[0];
    array[0] = swap;
    return array;
}

