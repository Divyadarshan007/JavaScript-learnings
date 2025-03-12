class Demo {
    constructor() {
        console.log("hello")
    }


    hello() {
        console.log("second")
    }
// parameterized method must be next to non parameterized method then only method overloading will work
// but in javascript method overloading does not support as c++ does 
//the lowermost method with same name will simply overwrite everytime
    // hello(name) {
    //     console.log(`first`)

    // }
}

class Demo2 extends Demo{
    hello(){
        super.hello() // super keyword is used to call parent class methods and constructor
        console.log("Third")
    }
}


let d1 = new Demo()
let d2 = new Demo2()

d1.hello("dev")
d2.hello()