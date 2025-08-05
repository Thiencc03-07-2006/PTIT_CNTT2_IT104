const sum = (arr) => {
  let total = 0;
  for (const element of arr) {
    total += element % 2 ? 0 : element;
  }
  return total;
};
console.log(sum([1, 2, 3, 4, 5, 6]));
