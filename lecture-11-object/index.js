let car = {
    name: "Tesla",
    model: "x", 
    color: "Red", 
    isEv: true, 
}


// let obj = Object.keys(car)
// let obj = Object.values(car)
let obj = Object.freeze(car) // can not add anything , can not update anything , can not delete its property
let newObj = Object.seal(car) // can not add anything , we can update propeerties , can not delete its property

let bike = Object.assign(car) // to assign existing object properties to another object  
bike = car;

    bike = {
        name: "Yamaha",
        model: "Rx-100",
        color: "Black",
        isEv: false,
    }

    delete bike.name // To delete any properties of Objects

console.log(bike)



