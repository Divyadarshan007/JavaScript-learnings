let a = {
    name : {
        fname : "Divyadarshan",
        lname: "Das",
        grid: 8215
    }
}


let stringObj = JSON.stringify(a); // this method is to convert normal object to json format 

console.log(stringObj)
let normalObj = JSON.parse(stringObj); // this method is to convert json format to normal object
console.log(normalObj)