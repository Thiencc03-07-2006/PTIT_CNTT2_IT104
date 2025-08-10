class Book {
    id;
    title;
    author;
    year;
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getYear() {
        return this.year;
    }
    setTitle(input) {
        this.title = input;
    }
    setAuthor(input) {
        this.author = input;
    }
    setYear(input) {
        this.year = input;
    }
}
class Library {
    books;
    constructor(books) {
        this.books = books;
    }
    addBook(book) {
        this.books.push(book);
    }
    printAllBook() {
        this.books.map((target, index) => console.log(index +
            1 +
            ". Ten: " +
            target.getTitle() +
            " Tac Gia: " +
            target.getAuthor() +
            " Nam xuat ban: " +
            target.getYear()));
    }
    updateBookById(id, newTitle, newAuthor, newYear) {
        let index = this.books.findIndex((a) => a.getId() === id);
        if (index === -1) {
            console.log("Khong tim thay");
            return;
        }
        this.books[index]?.setTitle(newTitle);
        this.books[index]?.setAuthor(newAuthor);
        this.books[index]?.setYear(newYear);
    }
    findName(findName) {
        let library = new Library(this.books.filter((a) => a.getTitle().toLowerCase().includes(findName.toLowerCase())));
        if (library.books.length === 0) {
            console.log("Khong tim thay");
            return;
        }
        library.printAllBook();
    }
    deleteBookById(id) {
        library.books.splice(this.books.findIndex((a) => a.getId() === id), 1);
    }
}
let library = new Library([]);
let book1 = new Book("MD1", "Truong ca sang the", "unKnows", 2000);
let book2 = new Book("MD2", "Nam Thien Mon", "unKnows", 2001);
let book3 = new Book("MD3", "Mung Tam Thang Chap", "unKnows", 2003);
let book4 = new Book("MD4", "Frosk Break", "unKnows", 2004);
let book5 = new Book("MD5", "Star Fall", "unKnows", 2005);
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.printAllBook();
library.deleteBookById("MD2");
library.printAllBook();
library.updateBookById("33", "33", "33", 3333);
library.updateBookById("MD3", "Quy Dao Di Tien", "unKnows", 1998);
library.printAllBook();
library.findName("N");
export {};
