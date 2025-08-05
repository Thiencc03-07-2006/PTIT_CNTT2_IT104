const checkElement = (arr, num) => arr.some((target) => target === num);
console.log(checkElement([1, 2, 3, 4, 5], 3));
console.log(checkElement([1, 2, 3, 4, 5], 6));
