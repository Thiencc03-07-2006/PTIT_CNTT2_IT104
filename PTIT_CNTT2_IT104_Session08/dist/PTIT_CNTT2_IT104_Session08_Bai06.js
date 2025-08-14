"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findElement(arr, value) {
    return arr.find((target) => target === value);
}
console.log(findElement([1, 2, 3], 4));
console.log(findElement([1, 2, 3], 2));
