// 3. Write a javaScript function that accepts a number as a parameter and checks 
//if the number is prime or not (true or false)
// A prime number is greater than 0 & 1.

//const num = 5;

//to be prime  have to be divisible by only 1 and num
//need to check if the number is divisible by more than 1 and itself



function primeNumber(num){
    for(let i =2; i < num; i ++){
        if(num % i === 0){
            return false;
        }
    }
    return num >1;
}

console.log(primeNumber(5));
console.log(primeNumber(10));


// for (let i = 2; i < num; i ++){
//     return num / i
// } 
    

