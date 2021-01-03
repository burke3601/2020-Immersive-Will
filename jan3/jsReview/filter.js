const numbers = [1, 2, 3, 4, 10];

// const evenNumbers = numbers.filter(x => x % 2 === 0);

// console.log(evenNumbers);

function evenFunction() {
    const evenNumbers = numbers.filter(x => x % 2 === 0);

    console.log(evenNumbers);

};

//evenFunction()


const items = [ 
    { name: 'item1', id: 1 , price: 200 },
    { name: 'test2', id: 2 , price: 300 },
    { name: 'test3', id: 3 , price: 400 },
    { name: 'test4', id: 4 , price: 500 }
    ];

//const filteredItems = items.filter( item => item.price > 300)

//console.log(filteredItems)

function filteredItems() {
    const answer = items.filter( item => item.id > 1);
    console.log(answer)
}
filteredItems()