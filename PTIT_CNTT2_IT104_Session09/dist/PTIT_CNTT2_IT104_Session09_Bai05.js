class DataStore {
    data;
    constructor(data) {
        this.data = data;
    }
    add(item) {
        this.data.push(item);
    }
    getAll() {
        return this.data;
    }
    remove(index) {
        this.data.splice(index, 1);
    }
}
let data = new DataStore([1, 2, 5]);
data.add(9);
console.log(data.getAll());
data.remove(1);
console.log(data.getAll());
export {};
