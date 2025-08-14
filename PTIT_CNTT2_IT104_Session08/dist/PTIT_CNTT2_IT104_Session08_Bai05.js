"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fistEven(arr) {
    return arr.find((target) => typeof target == "number" && target % 2 === 0);
}
console.log(fistEven([1, 2, 3]));
console.log(fistEven(["1", "2", "3"]));
console.log(fistEven(["a", "b", "c"]));
