function partialUpdate<T>(obj: T, update: T): T {
  return { ...obj, ...update };
}
console.log(partialUpdate({ name: "An", age: 2000 }, { name: "An Lan" }));
console.log(partialUpdate({ name: "An", age: 2000 }, { unknows: "haha" }));
