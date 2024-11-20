// interface cricket{
//     environmentName:string;
//     url:string
//     timeout:number
// }
// class environmentVariables{
//     private environmentName:string;
//     static statVar:string;
//     private url:string
//     private timeout:number
//     constructor(){
//         let a = 10
//         let b = 100
//         this.timeout =a*b;
//     }
//     set setEnvironmentName(name:string){
//         this.environmentName= name;
//     }

//     set setUrl(url:string){
//         this.url=url;
//     }

//     display(){
//         console.log(`environment name:${this.environmentName} and url:${this.url}`);
//     }
    
//     get getTimeOut():number{
//         return this.timeout;
//     }
// }


// let instance = new environmentVariables();
// // instance.setEnvironmentName = 'prod';
// // instance.setUrl = 'https:\\wwww.example.com';
// console.log(instance.getTimeOut);
// instance.display();
// //environmentVariables.statVar = 'this is a static variable';
// /// Instance variable : these variable are only accessable once the object of a class is initialized
// /// class variable : these can be asses directly using class name.


interface cricket{
    batting():void
    bowling():void
}

abstract class umpire{
    out():void{
        console.log('Umpire can ask the batsmen to go back after getting out.');
    }

    abstract runout():void
}

let umpire1 = new umpire();

class player1 extends umpire implements cricket{
    runout(): void {
        console.log('Batsmen is when he is out of the crease and the ball his the stumps');
    }
    batting(): void {
        console.log('He is a right hand batsman')
    }
    bowling(): void {
        console.log('He is a right hand bowler and he spinner');
    }
    
}

let player = new player1();

//interface -----abstract class ------ class