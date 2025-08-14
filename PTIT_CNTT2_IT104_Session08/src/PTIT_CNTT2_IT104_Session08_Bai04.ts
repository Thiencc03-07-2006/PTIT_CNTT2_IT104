interface Num {
  num: number;
}
interface Str {
  str: string;
}
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}
let num: Num = { num: 1 };
let str: Str = { str: "mot" };
console.log(merge(num, str));
