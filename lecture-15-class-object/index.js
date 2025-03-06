class Student{
    constructor(name, marks){
        this.name = name;
        this.marks = marks
    }

    getValue(){
        console.log(`Name : ${this.name}`)
        console.log(`marks : ${this.marks}`)
    }
}


let s1 = new Student("name", [10, 20, 30])
s1.getValue();