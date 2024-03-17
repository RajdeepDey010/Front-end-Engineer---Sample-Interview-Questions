/* 
Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.
*/

let strs = ["eat","tea","tan","ate","nat","bat"]

function chkAng(wrd1, wrd2) {
    if (wrd1.length != wrd2.length)
        return false;
    let obj1 = {}
    let obj2 = {}
    for (let i = 0; i < wrd1.length; i++) {
        if (obj1[wrd1[i]]) {
            obj1[wrd1[i]] += 1;
        }
        else
            obj1[wrd1[i]] = 1;
        if (obj2[wrd2[i]]) {
            obj2[wrd2[i]] += 1;
        }
        else
            obj2[wrd2[i]] = 1;
    }

    for (let key in obj1) {
        if (obj1[key] != obj2[key])
            return false;
    }
    return true;
}

let res = []
function work() {
    for (let i = 0; i < strs.length; i++) {
        let tmp = []
        if (strs[i] != -1) {
            tmp.push(strs[i])

            for (let j = i + 1; j < strs.length; j++) {
                if (strs[j] == -1)
                    continue;
                if (chkAng(strs[i], strs[j])) {
                    tmp.push(strs[j])
                    strs[j] = -1
                }
            }
            res.push(tmp)
        }

    }
}

work()
console.log(res)