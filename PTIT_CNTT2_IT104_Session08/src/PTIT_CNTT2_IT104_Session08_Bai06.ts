function findElement<T>(arr: T[], value: T): T | undefined {
  return arr.find((target) => target === value);
}
console.log(findElement([1, 2, 3], 4));
console.log(findElement([1, 2, 3], 2));
