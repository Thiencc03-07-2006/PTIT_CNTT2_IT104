function findMaxLength<T extends string>(str: T): string | undefined {
  let arr = str.split(/\s+/);
  let temp = [...arr].map((target) => {
    let newStr = "";
    target.split("").forEach((e) => (!newStr.includes(e) ? (newStr += e) : ""));
    return newStr.length;
  });
  return arr[temp.indexOf(Math.max(...temp))];
}
let str = "hello world apple banana orange pumpkin cucumber";
console.log(findMaxLength(str));
