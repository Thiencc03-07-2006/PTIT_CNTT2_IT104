const insestArr = (arr1, arr2, index) => {
  if (index > arr1.length) {
    return "Vi tri khong hop le";
  }
  for (let i = 0; i < arr2.length; i++) {
    arr1.splice(i + index, 0, arr2[i]);
  }
  return arr1;
};
console.log(insestArr([1, 2, 3, 7, 8], [4, 5, 6], 3));
console.log(insestArr(["a", "b", "e", "f"], ["c", "d"], 2));
