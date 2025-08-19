const mergeObjects = <T, U>(obj1: T, obj2: U): T & U => {
  return { ...obj1, ...obj2 };
};
console.log(mergeObjects({ name: "An" }, { role: "Dev" }));
