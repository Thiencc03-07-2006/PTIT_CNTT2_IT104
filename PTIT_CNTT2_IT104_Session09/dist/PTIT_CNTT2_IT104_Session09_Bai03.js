const mergeObjects = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
};
console.log(mergeObjects({ name: "An" }, { role: "Dev" }));
export {};
