const handleUnionType = (unknown) => {
    if (typeof (unknown) === "string") {
        return unknown.length;
    }
    if (unknown % 2 == 0) {
        return "Day la so chan";
    }
    else {
        return "Day la so le";
    }
};
console.log(handleUnionType("demo"));
console.log(handleUnionType(3));
console.log(handleUnionType(10));
export {};
