const withDefault = <T>(input: T | string = "Default"): T | string => input;
console.log(withDefault());
console.log(withDefault(42));
console.log(withDefault(true));
