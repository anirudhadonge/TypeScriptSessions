/// Class --- blueprint or a template --- using which we can create a object.
//// You create a mold of doll --- multiple dolls

//// Acess modifiers
//// static Keyword.


class MyClass {
    protected numberStudent: number;
    static staticvar: number;
    constructor(numberStudent:number){
        this.numberStudent = numberStudent;
        console.log("This is a class object" + this.numberStudent);
    }

    static display():void {
        console.log("This is a display method");
        //console.log(`number of students ${this.numberStudent}`);
    }

    get getNumberofStudent():number{
        return this.numberStudent;
    }

    set settNumberOfStudent(count:number){
        this.numberStudent = count;
    }
}

class ChildClass extends MyClass{
    constructor(numberStudent:number){
        super(numberStudent);
    }

    setNumOfStudent(count:number){
        this.numberStudent= count;
    }
}

MyClass.staticvar = 10
console.log(`static variable value is ${MyClass.staticvar}`);
MyClass.display();
// let division1 = new MyClass(50);
// division1.display()
// console.log(division1.)
// division1. = 10
// console.log(division1.numberStudent)

