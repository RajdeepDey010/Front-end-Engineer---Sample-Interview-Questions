/*
Write a function that takes an integer 'x'(greater than 0) as input and returns a new integer
formed by reversing the digits of 'x' without using any built-in methods for reversal. After
reversing the digits, determine whether the resulting number has any prime factors. If it does
have prime factors, return 'Yes' along with the list of prime factors; otherwise, return 'No'."
*/

let x = 1000;

function revNum(val) {
    let sum = 0;
    while (val > 0) {
        let rem = val % 10;
        sum = sum * 10 + rem;
        val = parseInt(val / 10);
    }
    return sum;
}

function chkPrime(val) {
    if (val < 2) {
        return false;
    }
    let sqrt = Math.sqrt(val)
    for (let i = 2; i <= sqrt; i++) {
        if (val % i == 0) {
            return false
        }
    }
    return true;
}

function work() {
    let tmp = revNum(x);
    let arr = []

    for (let i = 2; i <= tmp; i++) {
        if (tmp % i == 0) {
            if (chkPrime(i))
                arr.push(i)
        }
    }

    if (arr.length) {
        console.log("Yes - ", arr)
    }
    else
        console.log("No")
}

work()