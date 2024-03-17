/* 
Given a string s and a array of strings wordArray, return true if s can be segmented into a
space-separated sequence of one or more array words.
Note that the same word in the array may be reused multiple times in the segmentation
*/

let s = "leetcode";
let wordArray = ["leet","code"]

function work() {
    let tmp = wordArray.join('')
    if(s.includes(tmp))
        return true
    else
        return false
}

console.log(work())