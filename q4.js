/* 
Given an array of non-negative integers nums, arrange them such that they form the largest number and return it.
Note return the result in the form of string
*/

let nums = [10,2]

function work(arr){

    let temp = arr.sort(
        (a,b) => `${b}${a}` - `${a}${b}` 
    )
    temp = temp.join("")
    return temp
}

console.log(work(nums))