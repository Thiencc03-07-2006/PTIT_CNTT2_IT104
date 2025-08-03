const checkParity = (x) =>
  x % 2 == 0
    ? console.log(`${x} is an even number`)
    : x % 2 == 1
    ? console.log(`${x} is an odd number`)
    : console.log(`${x} not is number int`);
checkParity("a");
checkParity(10);
checkParity(7);
