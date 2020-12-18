// 2. Write a javaScript function that returns a passed string(one word) with letters in alphabetical order.
// Assume NO punctuation, NO spaces, and NO symbols are used in the string!
// i.e. "awesome" becomes "aeemosw"

//const word = 'awesome';

//console.log(word.split('').sort().join(''))

function abcOrder(str) {
    return(str.split('').sort().join(''))
}

console.log(abcOrder('kjsadfjknsdafkjkjhdsfkdskjnbindkjfnvasd'))

