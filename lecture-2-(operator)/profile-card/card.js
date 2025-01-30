let grId = prompt("Enter your Gr Id : ");
let sDate = prompt("Enter your Starting Date : ");
let name1 = prompt("Enter your Full Name : ");
let course = prompt("Enter your Course : ");
let duration = prompt("Enter your Duration : ");
let number = prompt("Enter your Whatsapp Number : ");
let imageURL = prompt("Enter your Image URL : ");

document.getElementById("gr").innerHTML = grId
document.getElementById("sDate").innerHTML = sDate
document.getElementById("name").innerHTML = name1
document.getElementById("course").innerHTML = course
document.getElementById("duration").innerHTML = duration
document.getElementById("number").innerHTML  = number
document.getElementById("image").src  = imageURL;