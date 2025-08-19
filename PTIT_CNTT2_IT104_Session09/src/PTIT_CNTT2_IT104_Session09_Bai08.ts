const creatObj = <K extends string, V>(keys: K[], values: V[]): Record<K, V> =>
  Object.fromEntries(keys.map((t, i) => [t, values[i]])) as Record<K, V>;
console.log(creatObj(["name", "age"], ["An", 9]));
