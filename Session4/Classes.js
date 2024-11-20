"use strict";
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
class umpire {
    out() {
        console.log('Umpire can ask the batsmen to go back after getting out.');
    }
}
let umpire1 = new umpire();
class player1 extends umpire {
    runout() {
        console.log('Batsmen is when he is out of the crease and the ball his the stumps');
    }
    batting() {
        console.log('He is a right hand batsman');
    }
    bowling() {
        console.log('He is a right hand bowler and he spinner');
    }
}
let player = new player1();
//interface -----abstract class ------ class
