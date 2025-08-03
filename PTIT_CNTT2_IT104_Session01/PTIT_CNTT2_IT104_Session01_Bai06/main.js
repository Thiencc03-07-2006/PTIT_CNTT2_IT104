const createUser = (name, age = 18, role = "user") => {
  return { name, age, role };
};
let a = createUser("Dev");
let b = createUser("Nguyen Van A", 20, "Admin");
console.log(a);
console.log(b);
