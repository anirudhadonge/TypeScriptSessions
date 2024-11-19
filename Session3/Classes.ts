/// Class --- blueprint or a template --- using which we can create a object.
//// You create a mold of doll --- multiple dolls


class MyClass {
    numberStudent: number;
    constructor(numberStudent:number){
        this.numberStudent = numberStudent;
        console.log("This is a class object" + this.numberStudent);
    }

    display():void {
        console.log("This is a display method");
    }
}

let division1 = new MyClass(50);