// array destructuring
let arr = [10, 20, 30, 40, 50];

let [a, b] = arr;

// console.log(a, b)
// object destructuring
let obj = {
    name: "hello world",
}

let { name } = obj;

// console.log(name);

// spreading array
console.log(...arr)
// accesing the objct dynamically through square brakets []  
let num = [1, 2, 3, 1, 3, 5, 6, 3, 3, 4, 2, 5, 6]
let numObj = {}; // finding frequency 
for(let val of num){
    numObj[val] = numObj[val] ? numObj[val] + 1 : 1;
}

console.log(numObj)

// reduce method
// accumulator that means we can assign initial value 
// this method can be used to find sum of array or any other operation    
let answer = num.reduce((acc, val)=>{
return acc + val;
}, 0)

console.log(answer);
