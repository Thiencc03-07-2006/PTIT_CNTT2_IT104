function sum(num1, num2) {
    if (typeof (num1) == "string")
        num1 = parseFloat(num1);
    if (typeof (num2) == "string")
        num2 = parseFloat(num2);
    if (isNaN(num1) || isNaN(num2))
        return "Gia tri truyen vao khong hop le";
    return num1 + num2;
}
function sub(num1, num2) {
    if (typeof (num1) == "string")
        num1 = parseFloat(num1);
    if (typeof (num2) == "string")
        num2 = parseFloat(num2);
    if (isNaN(num1) || isNaN(num2))
        return "Gia tri truyen vao khong hop le";
    return num1 - num2;
}
function mul(num1, num2) {
    if (typeof (num1) == "string")
        num1 = parseFloat(num1);
    if (typeof (num2) == "string")
        num2 = parseFloat(num2);
    if (isNaN(num1) || isNaN(num2))
        return "Gia tri truyen vao khong hop le";
    return num1 * num2;
}
function div(num1, num2) {
    if (typeof (num1) == "string")
        num1 = parseFloat(num1);
    if (typeof (num2) == "string")
        num2 = parseFloat(num2);
    if (isNaN(num1) || isNaN(num2))
        return "Gia tri truyen vao khong hop le";
    if (num2 === 0)
        return "Khong the chia cho 0";
    return num1 + num2;
}
let num1 = 3, num2 = "4";
console.log(sum(num1, num2));
console.log(sub(num1, num2));
console.log(mul(num1, num2));
console.log(div(num1, num2));
export {};
