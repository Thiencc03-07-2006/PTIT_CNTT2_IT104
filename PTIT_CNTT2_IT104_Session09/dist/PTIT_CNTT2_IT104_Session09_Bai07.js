const updatesUser = (obj1, obj2) => {
    if ("id" in obj2) {
        return "Id cannot be changed";
    }
    return { ...obj1, ...obj2 };
};
let user = {
    id: 1,
    name: "Alice",
    email: "a@gmail.com",
};
let updates = { name: "john" };
let temp = updatesUser(user, updates);
console.log(temp);
if (typeof temp !== "string") {
    user = temp;
}
console.log(user);
updates = { id: 9, name: "Alice" };
temp = updatesUser(user, updates);
console.log(temp);
if (typeof temp !== "string") {
    user = temp;
}
console.log(user);
export {};
