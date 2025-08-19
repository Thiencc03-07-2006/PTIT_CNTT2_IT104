class DataStore<T> {
  constructor(private data: T[]) {}
  add(item: T) {
    this.data.push(item);
  }
  getAll() {
    return this.data;
  }
  remove(index: number) {
    this.data.splice(index, 1);
  }
}
let data = new DataStore([1, 2, 5]);
data.add(9);
console.log(data.getAll());
data.remove(1);
console.log(data.getAll());
