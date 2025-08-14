function flatten<T>(arr: T[]): T[] {
  let back: T[] = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      back = [...back, ...flatten(element)];
    } else {
      back.push(element);
    }
  });
  return back;
}
console.log(flatten([1, [2, [3, 4], 5], 6]));
