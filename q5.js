// Given a array of non-negative integers nums, Find the Kth largest element in the array
// Note - Do not use any sorting algorithm or library's sort method

function work(nums,k){
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

//Enter below an array of positive numbers and the largest number you want to search
let tmp = [10,4,12,9,87,34]
let temp = 3
console.log(work(tmp,temp))