
// enum keywork <enum Name> { <list of items>}


// enum classRoom {
//     'chairs',
//     'tables',
//     'Board' = 3
// }


// console.log(classRoom.Board)

enum browserNames{
    mozzila ="Firefox",
    chrome = 'Chrome',
    edge='Edge'
}


function envokeBrowser(browser:string){
    switch(browser){
        case browserNames.mozzila:
            console.log("Firefox has been envoked");
            break;
        case browserNames.chrome:
            console.log("chrome has been envoked");
            break;
    }
}

envokeBrowser(browserNames.chrome);