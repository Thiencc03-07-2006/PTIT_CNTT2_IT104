"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function partialUpdate(obj, update) {
    return { ...obj, ...update };
}
console.log(partialUpdate({ name: "An", age: 2000 }, { name: "An Lan" }));
console.log(partialUpdate({ name: "An", age: 2000 }, { unknows: "haha" }));
