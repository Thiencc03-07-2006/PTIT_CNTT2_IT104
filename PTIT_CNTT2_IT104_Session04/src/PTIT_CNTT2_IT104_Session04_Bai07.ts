const processInput = (input: string | number | boolean) => {
  if (typeof input === "string") {
    if (input.split("").every((a) => a >= "0" && a <= "9")) {
      return input;
    } else {
      return `${
        input
          .split("")
          .filter((a) => (a >= "a" && a <= "z") || (a >= "A" && a <= "Z"))
          .length
      } ky tu chu cai`;
    }
  }
  if (typeof input === "number") {
    for (let i = 1; i <= Math.sqrt(input); i++) {
      if (i * i === input) {
        return "Khong phai la so nguyen to";
      }
    }
    return input <= 1 ? "Khong phai la so nguyen to" : "La so nguyen to";
  }
  if (typeof input === "boolean") {
    if (input) {
      return "Gia tri true - tien hanh xu ly";
    } else {
      return "Gia tri false - dung xu ly";
    }
  }
};
console.log(processInput("123"));
console.log(processInput("abc123!"));
console.log(processInput(2));
console.log(processInput(1));
console.log(processInput(10));
console.log(processInput(4));
console.log(processInput(true));
console.log(processInput(false));
