"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function merge(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
let num = { num: 1 };
let str = { str: "mot" };
console.log(merge(num, str));
