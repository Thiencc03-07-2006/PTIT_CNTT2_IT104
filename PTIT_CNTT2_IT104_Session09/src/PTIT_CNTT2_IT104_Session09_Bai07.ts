const updatesUser = <T extends User>(obj1: T, obj2: Partial<T>): T | string => {
  if ("id" in obj2) {
    return "Id cannot be changed";
  }
  Object.assign(obj1, obj2);
  return obj1;
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
console.log(updatesUser(user, updates));
console.log(user);
