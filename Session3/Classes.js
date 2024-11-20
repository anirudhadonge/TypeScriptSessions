"use strict";
/// Class --- blueprint or a template --- using which we can create a object.
//// You create a mold of doll --- multiple dolls
//// Acess modifiers
//// static Keyword.
class MyClass {
    constructor(numberStudent) {
        this.numberStudent = numberStudent;
        console.log("This is a class object" + this.numberStudent);
    }
    static display() {
        console.log("This is a display method");
        //console.log(`number of students ${this.numberStudent}`);
    }
    get getNumberofStudent() {
        return this.numberStudent;
    }
    set settNumberOfStudent(count) {
        this.numberStudent = count;
    }
}
class ChildClass extends MyClass {
    constructor(numberStudent) {
        super(numberStudent);
    }
    setNumOfStudent(count) {
        this.numberStudent = count;
    }
}
MyClass.staticvar = 10;
console.log(`static variable value is ${MyClass.staticvar}`);
MyClass.display();
// let division1 = new MyClass(50);
// division1.display()
// console.log(division1.)
// division1. = 10
// console.log(division1.numberStudent)
