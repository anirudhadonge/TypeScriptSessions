
// let a = {
//     name:"Anirudha",
//     course:"Playwright"
// }

// console.log(a);


// There are two ways of declaring/creating a template for Object.
//1. using Type
//2. Interface keyword.


type firstTemplate ={
    name:string,
    course?:string,
    days:number
}

let firstObj : firstTemplate ={
    name: "Anirudha",
    days:4
}

// // firstObj.days = 5

// console.log(firstObj)
/// ReadOnly 
/// Option Properties
/// Merge two templates.

// type obj1 ={
//     name:string
// }
// type obj2 = {
//     course:string
// }


// let mergedTemplate : obj1 & obj2 & {
//     name:"Anirudha",
//     course:"Playwright"
// }
export{}

