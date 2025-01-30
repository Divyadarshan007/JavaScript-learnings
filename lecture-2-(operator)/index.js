let a = 10;
let b = 20;
let c = "10";
let d = "40";
console.log(a + b);
console.log("The sum is : " + (a + b));
console.log("The sum is : " + (parseInt(c) + parseInt(d)));// parseInt to convert string into integer (same parseFloat)
console.log(`The sum is : ${parseInt(c) + parseInt(d)}` );//template literalls or string interpolation


let fullname = prompt("Enter Full Name : ");
let  age = prompt("Enter Age : ");
let  about = prompt("Enter About yourself : ");

console.log(fullname, age, about);

document.getElementById("name").innerHTML = fullname;
document.getElementById("age").innerHTML = age;
document.getElementById("about").innerHTML = about;