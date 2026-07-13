for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

for (let i = 5; i >= 0; i -= 1) {
    console.log(i);
}

let i = 5;
while (i >= 0) {
    console.log(i);
    i--;
}

console.log(addOne([1, 2, 3]));
console.log(addOne([-2, -1, 0, 99]));
function addOne(newarr) {
    for (let i = 0; i < newarr.length; i++) {
        newarr[i] += 1;
    }

    return newarr;
}

function addnum(newarr, num) {
    for (let i = 0; i < newarr.length; i++) {
        newarr[i] += num;
    }

    return newarr;
}

console.log(addnum([1,2,3],3));
console.log(addnum([-2, -1, 0, 99],2));

function addArrays(arr1, arr2){
    let sum2=[];
    for(let i=0; i<arr1.length, i<arr2.length ; i++){
        sum2[i] = arr1[i] + arr2[i];
    }
    return sum2;
}

console.log(addArrays([1,1,2], [1,1,3]));
console.log(addArrays([1,2,3], [4,5,6]));

function countPositive(nums){
    let count=0;
    for(let i=0; i< nums.length; i++){
        if(nums[i]>0){
            count++;
        }
    }
    return count;
}

console.log(countPositive([1,-3,5]));
console.log(countPositive([-2,3,-5,7,10]));