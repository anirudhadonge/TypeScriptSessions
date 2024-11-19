"use strict";
var demo;
(function (demo) {
    demo["ONE"] = "one";
    demo["TWO"] = "two";
    demo["THREE"] = "three";
})(demo || (demo = {}));
console.log(demo.ONE);
