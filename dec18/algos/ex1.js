// 1. Write a function that accepts a string as a parameter and converts the first letter of each word to uppercase.
// (i.e. "the quick brown fox" becomes "The Quick Brown Fox")

//go back and work on this first letter of each!!!1


const sent = 'the quick brown fox';
console.log(sent.toUpperCase())


function toUpper(s) {
    s = '';
    return s.toUpperCase();
}

console.log(toUpper('test'));