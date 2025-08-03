const totalArr = (...arr) => {
  return arr.map((subArr) => subArr.reduce((sum, num) => sum + num, 0));
};
console.log(totalArr([1, 2], [6, 7, 8], [12, 8]));
