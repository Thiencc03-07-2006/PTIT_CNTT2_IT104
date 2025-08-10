class Book {
    id;
    title;
    author;
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
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
    setTitle(input) {
        this.title = input;
    }
    setAuthor(input) {
        this.author = input;
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
            target.getAuthor()));
    }
    editBook(id, title, author) {
        let index = this.books.findIndex((a) => a.getId() === id);
        if (index === -1) {
            console.log("Khong tim thay");
            return;
        }
        this.books[index]?.setTitle(title);
        this.books[index]?.setAuthor(author);
    }
}
let library = new Library([]);
let book1 = new Book("MD1", "Truong ca sang the", "unKnows");
let book2 = new Book("MD2", "Nam Thien Mon", "unKnows");
let book3 = new Book("MD3", "Mung Tam Thang Chap", "unKnows");
let book4 = new Book("MD4", "Frosk Break", "unKnows");
let book5 = new Book("MD5", "Star Fall", "unKnows");
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.printAllBook();
library.editBook("33", "33", "33");
library.editBook("MD3", "Quy Dao Di Tien", "unKnows");
library.printAllBook();
export {};
