"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function flatten(arr) {
    return arr.reduce((a, b) => [...a, ...b], []);
}
console.log(flatten([
    [1, 2],
    [3, 4],
    [5, 6],
]));
console.log(flatten([
    ["a", "b"],
    ["c", "d"],
]));
