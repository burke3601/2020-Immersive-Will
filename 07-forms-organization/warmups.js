const colors = require('./colors.json')

//console.log(colors)


const oneColor = (arr, string) =>{
    let newArray = arr.filter((c)=> c === string);
    return newArray;
}

//console.log(oneColor(colors, "orange"))

const coffee = require('./coffee.json')

function calculateTotal(arr){
    const orderType = 'espresso';
    
    const justEspresso = arr.filter(o => {
        return o.order === orderType
    });
    //console.log(justEspresso)
    //grab just the costs
    const justCosts = justEspresso.map(o => {
        //pluck out the value of .cost
        return o.cost;
    });
    console.log(justCosts)

    let total = 0;
    for(let cost of justCosts) {
        total = total + cost;
    }
    //console.log(total);

    let finalTotal = justCosts.reduce((runningTotal, curr)=> {
        //add the current item to the running total
        let sum = runningTotal + curr;

        runningTotal= sum;
        return runningTotal;
    }, 0);
        //console.log(finalTotal);



} 


calculateTotal(coffee)


const products = require('./products.json')


const onSale = (arr) =>{
    return arr.filter((product) =>{
        return product.price !== product.originalPrice
    })
}

const itemsOnSale = onSale(products)
console.log(itemsOnSale)










