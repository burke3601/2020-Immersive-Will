//3. Return the lowest index at which a value should be inserted into an array
//once it has been sorted. (example: ([1,2,3,5], 1.5) should return 1
//because it's greater than 1 (index 0) and less than 2 (index 1).

let numbers = [1,2,3,5]
// let x = 4

// 4 should be in index[3]
//need to take index of numbers ++
// compare to value of x

//filter over

function whereIbelong(arr,num) {
    arr.sort((a,b) => {
        return a-b
    })
    let counter = 0;
    while (num > arr[counter]){
        counter ++
    }
    return counter
}


console.log(whereIbelong(numbers, 1.3))