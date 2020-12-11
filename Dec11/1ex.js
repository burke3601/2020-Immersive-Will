//1. From an unsorted array of numbers 1 to 100 excluding one number, how
//would you find the missing number?

const num = [1,2,5,4]


//sort array
// add up total
// compare to array 1-100
//subtract total
num.sort();

let array1 = num.reduce((a,b) => a + b, 0)
console.log(array1)

let array2 = new Array(5);
for (let i = 0; i < 5; i++) {
    array2[i] = i +1;
}
for (let i = 0; i < array2.length; i++){
    console.log(array2[i])
}

let array2Reduce = array2.reduce((a,b) => a + b, 0)
console.log(array2Reduce)

let answer = array2Reduce - array1

console.log(answer)






// function findMissing() {
//     //console.log(num)
//     const numSorted = num.sort
//     return numSorted
    
// }
//console.log(findMissing())

//console.log(num.sort)