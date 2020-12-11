// Write a function that takes two integers as arguments and returns the greatest common divisor of the two numbers. Example,
//console.log(12, 120) // returns 12


function greatest_divisor(n, m) {
    let x;
    let y;
    
    if (n>m) {
        x = m;
        y = n;
    }
    if (m > n) {
        x = n;
        y = m;
    }

    while(x > 0) {
        if ((m % x) === 0 && ((n % x) === 0)){
            
            break
        }
        else {
            return x --
        }

    }

    return x
}

console.log(greatest_divisor(12, 120))
console.log(greatest_divisor(10, 100))
console.log(greatest_divisor(10000, 100))