const myNums = [1, 2, 3]

const mySum = myNums.reduce( function (acc, currVal) {
//    console.log(`acc: ${acc}, currVal: ${currVal}`);
    return acc + currVal;
}, 0 )
//console.log(mySum); // 6

const myTotal = myNums.reduce((acc, currVal) => acc + currVal, 0) 
// console.log(myTotal); // 6

const shoppingCart = [
    {
        itemName: "Book",
        itemPrice: 10.99
    },
    {
        itemName: "Pen",
        itemPrice: 1.99
    },
    {
        itemName: "Notebook",   
        itemPrice: 5.49
    }
]
const total_price = shoppingCart.reduce((acc, item) => acc + item.itemPrice, 0);
console.log(total_price); // 18.47