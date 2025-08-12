class Book {
    id;
    title;
    author;
    stock;
    status;
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}
class Member {
    id;
    name;
    contact;
    lendedBooks;
    status;
    constructor(id, name, contact, lendedBooks, status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.lendedBooks = lendedBooks;
        this.status = status;
    }
}
class LendedBook {
    memberId;
    bookId;
    dueDate;
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}
class Library {
    books;
    members;
    constructor(books, members) {
        this.books = books;
        this.members = members;
    }
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        this.books.forEach((target, index) => console.log(index + 1 + ". " + target.title));
    }
    registerMember(id, name, contact) {
        this.members.push(new Member(id, name, contact, [], true));
    }
    blockMember(id) {
        let index = this.members.findIndex((target) => target.id === id);
        if (index !== 1) {
            this.members[index].status = false;
        }
    }
    showMembers() {
        this.members.forEach((target, index) => console.log(index +
            1 +
            ". " +
            target.name +
            " " +
            (target.status ? "Dang hoat dong" : "Ngung hot dong")));
    }
}
let book1 = new Book(1, "Tau hanh", "unknows", 3, true);
let library = new Library([], []);
library.addBook(book1);
library.showBooks();
library.registerMember(1, "Tac Thien", "Trieu");
library.showMembers();
library.blockMember(1);
library.showMembers();
export {};
