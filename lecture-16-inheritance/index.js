class Animal{
    constructor(name, breed){
        this.name = name;
        this.breed = breed;
    }

    getValue(){
        console.log(`Name : ${this.name} breed : ${this.breed} color : ${this.color}`)
    }
}

class Dog extends Animal{
    constructor(name, breed, color){
        super(name, breed);
        this.color = color;
    }


}
let d1 = new Dog("mehman","pandesara","red")
d1.getValue();

