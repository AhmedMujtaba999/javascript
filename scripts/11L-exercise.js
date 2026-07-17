let nums=[1,-3,5];
function minmax(nums){
    if(nums.length===0){
        return {
            min: null,
            max: null
        }
    }
let min = nums[0];
let max= nums[0];
for(let i=0; i< nums.length; i++){
    if(nums[i]> max){
        max= nums[i];
    }
    else if(nums[i]<min ){
        min = nums[i];
    }
}
   return {
    min : min,
    max : max
   }
}

console.log(minmax(nums));
console.log(minmax([-2, 3, -5, 7,10]));
console.log(minmax([]));
console.log(minmax([3]));