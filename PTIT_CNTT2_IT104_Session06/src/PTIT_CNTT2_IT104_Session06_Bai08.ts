class Book {
  id;
  title;
  author;
  stock;
  status;
  constructor(
    id: number,
    title: string,
    author: string,
    stock: number,
    status: boolean
  ) {
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
  constructor(
    id: number,
    name: string,
    contact: string,
    lendedBooks: LendedBook[],
    status: boolean
  ) {
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
  constructor(memberId: number, bookId: number, dueDate: Date) {
    this.memberId = memberId;
    this.bookId = bookId;
    this.dueDate = dueDate;
  }
}
class Library {
  books;
  members;
  constructor(books: Book[], members: Member[]) {
    this.books = books;
    this.members = members;
  }
  addBook(book: Book) {
    this.books.push(book);
  }
  showBooks() {
    this.books.forEach((target, index) =>
      console.log(index + ". " + target.title)
    );
  }
}
let book1 = new Book(1, "Tau hanh", "unknows", 3, true);
let library = new Library([], []);
library.addBook(book1);
library.showBooks();
