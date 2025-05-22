const logger = (message) => {
    console.log(message);
};

const calculatorOutput = (result) => {
    console.log('Output:', result);
};

const add = (a, b, callback) => {
    callback(a + b);
};

const subtract = (a, b, callback) => {
    callback(a - b);
};

const multiply = (a, b, callback) => {
    callback(a * b);
}

add(1, 10, logger);
add(5, 20, calculatorOutput);

subtract(10, 5, calculatorOutput);

multiply(3, 10, calculatorOutput);
multiply(2, 10, (result) => {console.log('Your result:', result)});
multiply(2, 10, (result) => console.log('Your result:', result));
multiply(2, 10, result => console.log('Your result:', result));



const sortNumbers = (numbersArray, callback) => {
    const output = numbersArray.sort(callback);
    return output;
}

const isEven = (predicate) => {
    return numbers.filter(predicate);
};

const numbers = [9, 6, 5, 8, 7, 3, 2, 4, 1];
console.log(sortNumbers(numbers, (a, b) => a - b));
console.log(sortNumbers(numbers, (a, b) => b - a));
console.log(isEven(n => n % 2 === 0));
//forEach
const fruits =['apple','strawberry','pear'];
fruits.forEach((fruit,index) =>console.log(fruit,index));

fruits.forEach((fruit) =>console.log(fruit));
const hasStrawberry=fruits.some(fruit=>{
    if(fruit==='strawberry'){
        return true;
    }return false;
});
console.log('hasStrawberry: ', hasStrawberry)

const someNumbers=[10,22,30,25];
const someNumbersTotal= someNumbers.reduce((acc,curr)=>acc+curr);
console.log(someNumbersTotal)
const shop=[
   { name:"Plot armor",
    price:999},
   { name:"Jobloop Caps",
    price:44},
     { name:"Hero Sword",
    price:653},
     { name:"B.F. Sword",
    price:1000},
     { name:"Macguffin",
    price:753},
]
const priceTotal=shop.reduce((acc,curr)=>acc+curr.price,0);
console.log(`To buy the items you need: ${priceTotal}`);
const newShop=shop.map(shopItem=>{
    if(shopItem.name==="Jobloop Caps"){
        return{
            name:shopItem.name,
            price: shopItem.price
        }
    }
})
shop.map(shopItem=>{
    return{
        name: shopItem.name,
        pice: shopItem.price+10
    }
})
console.log(newShop);