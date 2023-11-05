//foeEach koi bhi value return nai karta

const coding = ["js", "java" , "css" ,"python"]

const values = coding.forEach ((item) =>{
    console.log(item)
})
console.log(values)

//filter scope (object{} hoi to return karvu j pade no karvi to [array] empty return thay)

const myNum = [1,2,3,4,5,6,7,8,9,10]

//filter
// const newNum = myNum.filter ((num) =>{
//     return num > 4
// })
// console.log(newNum)

//foreach : condition mukvi pade nakr value return na thay
// const newNum = []
//  myNum.forEach ((num) =>{
//    if (num > 4) {
//       newNum.push(num)
//    }
// })
//     console.log(newNum)

//map 
// const newNum = myNum.map((num) => num + 10 )
// console.log(newNum)


// const newNum = myNum
//                    .map((num) =>  num * 10)
//                    .map((num) =>  num + 1 )
//                    .filter((num) => num >= 40)
// console.log(newNum)


//reduce 
const number = [1,2,3]

// const total = number.reduce(function(accumulator, currentValue){
//     console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`)
//     return accumulator + currentValue
// }, 0)

// console.log(total)


const total = number.reduce((accumulator, currentValue) => accumulator + currentValue ,0);

console.log(total)

const shoppingCart = [
    {
        itemName : "js course",
        price : 3000
    },
    {
        itemName : "js course",
        price : 4000
    },
    {
        itemName : "js course",
        price : 5000
    },
    {
        itemName : "js course",
        price : 6000
    }
]


const priceToPay = shoppingCart.reduce((acc , item) => acc + item.price , 0)

console.log(priceToPay)

//. How do you remove falsy values from an array
const myArray = [false, null, 1,5, undefined]
myArray.filter(Boolean); // [1, 5] // is same as myArray.filter(x => x);
console.log(myArray)

// How do you get unique values of an array
console.log([...new Set([1, 2, 4, 4, 3])]); // [1, 2, 4, 3]

// How do you map the array values without using map method
//You can map the array values without using the map method by just using the from method of array

const countries = [
    { name: 'India', capital: 'Delhi' },
    { name: 'US', capital: 'Washington' },
    { name: 'Russia', capital: 'Moscow' },
    { name: 'Singapore', capital: 'Singapore' },
    { name: 'China', capital: 'Beijing' },
    { name: 'France', capital: 'Paris' },
]

const cityNames = Array.from(countries, ({ capital}) => capital);
console.log(cityNames); // ['Delhi, 'Washington', 'Moscow', 'Singapore', 'Beijing', 'Paris

// What is the easiest way to convert an array to an object

var fruits = ["banana", "apple", "orange", "watermelon"];
var fruitsObject = {...fruits};
console.log(fruitsObject); // {0: "banana", 1: "apple", 2: "orange", 3: "watermelon"}


// How do you create an array with same data
//You can create an array with some data or an array with the same values using fill method.

var newArray = new Array(5).fill("0");
console.log(newArray); // ["0", "0", "0", "0", "0"]


// Is it possible to debug HTML elements in console
//Yes, it is possible to get and debug HTML elements in the console just like inspecting elements.

const element = document.getElementsByTagName("body")[0];
console.log(element);


// How do you display data in a tabular format using console object

const users = [{ "name":"John", "id": 1, "city": "Delhi"}, { "name":"Max", "id": 2, "city":"surat"}]
console.table(users);




