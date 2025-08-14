"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var weekDays;
(function (weekDays) {
    weekDays["mo"] = "Thu 2";
    weekDays["tu"] = "Thu 3";
    weekDays["we"] = "Thu 4";
    weekDays["th"] = "Thu 5";
    weekDays["fr"] = "Thu 6";
    weekDays["sa"] = "Thu 7";
    weekDays["su"] = "Chu Nhat";
})(weekDays || (weekDays = {}));
for (let e in weekDays) {
    console.log(weekDays[e]);
}
