function fistEven<T>(arr: T[]): T | undefined {
  return arr.find((target) => typeof target == "number" && target % 2 === 0);
}
console.log(fistEven([1, 2, 3]));
console.log(fistEven(["1", "2", "3"]));
console.log(fistEven(["a", "b", "c"]));
