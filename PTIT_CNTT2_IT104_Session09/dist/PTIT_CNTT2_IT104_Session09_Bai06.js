const firstMatch = (input, predicate) => input.find((t) => predicate(t));
console.log(firstMatch([1, 2, 4, 6], (n) => n % 2 === 0));
console.log(firstMatch([1, 2, 4, 6], (n) => n % 2 === 2));
console.log(firstMatch(["cat", "house", "car"], (word) => word.length > 4));
export {};
