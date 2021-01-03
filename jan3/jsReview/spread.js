const cars = ['BMW', 'Toyota', 'Tesla', 'Audi'];

let newCarsArray = [...cars]; 
console.log(newCarsArray); 

const array1 = [1,2,3]; 
const array2 = [4,5];
const array3 =[...array1,...array2, 10,11,12];

console.log(array3)