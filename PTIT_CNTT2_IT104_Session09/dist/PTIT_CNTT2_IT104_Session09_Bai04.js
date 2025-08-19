const withDefault = (input = "Default") => input;
console.log(withDefault());
console.log(withDefault(42));
console.log(withDefault(true));
export {};
