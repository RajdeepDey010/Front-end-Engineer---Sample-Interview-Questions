/* 
Given an array of non-negative integers nums, arrange them such that they form the largest number and return it.
Note return the result in the form of string
*/


function work(arr){

    let temp = arr.sort(
        (a,b) => `${b}${a}` - `${a}${b}` 
    )
    temp = temp.join("")
    return temp
}

//Enter an array of non-negative integers below
let nums = [10,2]
console.log(work(nums))