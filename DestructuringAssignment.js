// Destructuring Assignment (...) => coppy

let arr1 = [1,2,3,4,5];

arr1 = arr1.map(value => value * 2)

console.log(`Array1: ${arr1}`)

let arr2 = [...arr1]

console.log(`Array2: ${arr2}`)


let state1 ={
    name: "Hai",
    age: "1"
}

let state2 = {...state1, address: "Hue"};
console.log(state2);