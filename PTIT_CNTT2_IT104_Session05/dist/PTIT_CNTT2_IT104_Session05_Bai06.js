class Book {
    title;
    author;
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
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
}
let library = new Library([]);
let book1 = new Book("Truong ca sang the", "unKnows");
let book2 = new Book("Nam Thien Mon", "unKnows");
let book3 = new Book("Mung Tam Thang Chap", "unKnows");
let book4 = new Book("Frosk Break", "unKnows");
let book5 = new Book("Star Fall", "unKnows");
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.printAllBook();
export {};
