"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function flatten(arr) {
    let back = [];
    arr.forEach((element) => {
        if (Array.isArray(element)) {
            back = [...back, ...flatten(element)];
        }
        else {
            back.push(element);
        }
    });
    return back;
}
console.log(flatten([1, [2, [3, 4], 5], 6]));
