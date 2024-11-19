"use strict";
// enum keywork <enum Name> { <list of items>}
// enum classRoom {
//     'chairs',
//     'tables',
//     'Board' = 3
// }
// console.log(classRoom.Board)
var browserNames;
(function (browserNames) {
    browserNames["mozzila"] = "Firefox";
    browserNames["chrome"] = "Chrome";
    browserNames["edge"] = "Edge";
})(browserNames || (browserNames = {}));
function envokeBrowser(browser) {
    switch (browser) {
        case browserNames.mozzila:
            console.log("Firefox has been envoked");
            break;
        case browserNames.chrome:
            console.log("chrome has been envoked");
            break;
    }
}
envokeBrowser(browserNames.chrome);
