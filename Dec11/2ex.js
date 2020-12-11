//2. From an unsorted array, check whether there are any two numbers that
//will sum up to any given number (example: ([1,5,7,8,4,3,9] ,6) returns
//true & ([1,5,7,8,4,3,9] , 3) returns false)


let numbers = [1,5,7,8,4,3,9]

//([1,5,7,8,4,3,9] ,6) true

//([1,5,7,8,4,3,9] , 3) false

//add numbers one by one
//compare to x variable

//let array1 = []
for(let i =0; i <= numbers.length; i++){
    console.log(numbers);
    let answer = numbers[i] + numbers[i+1]
    return answer
}
console.log(answer)

//  for (let i = 0; i <= numbers.length; i ++) {
//         return numbers[i]
// }
// console.log(numbers)


