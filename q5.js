// Given a array of non-negative integers nums, Find the Kth largest element in the array
// Note - Do not use any sorting algorithm or library's sort method

let nums = [10,4,12,9,87,34]
let k = 3

function work(){
    let i = 0
    while(i<k){
        var max = nums[i]
        let pos = -1
        for(let j=i+1;j<nums.length;j++)
        {
            if(nums[j]>max)
            {
                max = nums[j];
                pos = j;
            }
        }
        [nums[i], nums[pos]] = [nums[pos], nums[i]]
        i++
    }
    return max
}

console.log(work())