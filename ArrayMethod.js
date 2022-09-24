let arr = [1, 2, 3, 5, 4, 6, 7, 8, 9, 10];

// User Map replace for ForLoop
let newArr = arr.map((value) => {
  value = value * 2;
  return value;
});

console.log(`Origin Array: ${arr}`);
console.log(`New Array ${newArr}`);


// filter => return all value meet the condition
let filterArray = arr.filter(item => {
return item >= 5;
});

console.log(`Filter Array > or = 5: ${filterArray}`);

// Find => only return the first value meet the condition
let findArray = arr.find(item => {
    return item >= 5;
})

console.log(`Find Array > or = 5: : ${findArray}`);

//sort
console.log(arr.sort((a,b) => {return a - b}))