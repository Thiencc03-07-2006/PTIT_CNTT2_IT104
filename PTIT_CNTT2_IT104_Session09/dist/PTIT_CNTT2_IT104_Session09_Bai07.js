const updatesUser = (obj1, obj2) => {
    if ("id" in obj2) {
        return "Id cannot be changed";
    }
    Object.assign(obj1, obj2);
    return obj1;
};
let user = {
    id: 1,
    name: "Alice",
    email: "a@gmail.com",
};
let updates = { name: "john" };
console.log(updatesUser(user, updates));
console.log(user);
export {};
