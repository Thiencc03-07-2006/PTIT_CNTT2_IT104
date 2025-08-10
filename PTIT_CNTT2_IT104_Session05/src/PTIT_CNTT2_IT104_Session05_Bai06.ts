class Book {
  private title: string;
  private author: string;
  constructor(title: string, author: string) {
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
  books: Book[];
  constructor(books: Book[]) {
    this.books = books;
  }
  addBook(book: Book) {
    this.books.push(book);
  }
  printAllBook() {
    this.books.map((target, index) =>
      console.log(
        index +
          1 +
          ". Ten: " +
          target.getTitle() +
          " Tac Gia: " +
          target.getAuthor()
      )
    );
  }
}
let library: Library = new Library([]);
let book1: Book = new Book("Truong ca sang the", "unKnows");
let book2: Book = new Book("Nam Thien Mon", "unKnows");
let book3: Book = new Book("Mung Tam Thang Chap", "unKnows");
let book4: Book = new Book("Frosk Break", "unKnows");
let book5: Book = new Book("Star Fall", "unKnows");
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.printAllBook();
