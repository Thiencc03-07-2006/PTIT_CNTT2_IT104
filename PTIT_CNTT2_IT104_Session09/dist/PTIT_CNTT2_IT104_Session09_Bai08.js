const creatObj = (keys, values) => Object.fromEntries(keys.map((t, i) => [t, values[i]]));
console.log(creatObj(["name", "age"], ["An", 9]));
export {};
