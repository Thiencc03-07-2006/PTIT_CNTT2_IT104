const mergeArr = (arr1, arr2) => [...arr1, ...arr2].sort((a, b) => a - b);
console.log(mergeArr([1, 2, 3, 5, 9], [4, 6, 7, 8]));
