/* 
Given a string s and a array of strings wordArray, return true if s can be segmented into a
space-separated sequence of one or more array words.
Note that the same word in the array may be reused multiple times in the segmentation
*/

function work(s,wordArray) {
    let tmp = wordArray.join('')
    if(s.includes(tmp))
        return true
    else
        return false
}

//Enter a string and the array of strings below
let tmp = "leetcode";
let temp = ["leet","code"]
console.log(work(tmp,temp))