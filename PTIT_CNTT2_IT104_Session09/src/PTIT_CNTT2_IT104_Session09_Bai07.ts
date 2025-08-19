const updatesUser = <T extends User>(obj1: T, obj2: Partial<T>): T | string => {
  if ("id" in obj2) {
    return "Id cannot be changed";
  }
  return { ...obj1, ...obj2 };
};
interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
}
let user: User = {
  id: 1,
  name: "Alice",
  email: "a@gmail.com",
};
let updates: Partial<User> = { name: "john" };
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
