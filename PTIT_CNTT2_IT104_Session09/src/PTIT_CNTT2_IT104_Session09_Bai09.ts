const filterByType = <T>(input: T[], type: string[]): T[] =>
  input.filter((t) => type.includes(typeof t));
console.log(
  filterByType(
    [1, "an", 2, true, "bin", 3, { name: "an" }],
    ["string", "number"]
  )
);
console.log(
  filterByType(
    [1, "an", 2, true, "bin", 3, { name: "an" }],
    ["object", "boolean"]
  )
);
