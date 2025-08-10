class Book {
  private id: string;
  private title: string;
  private author: string;
  constructor(id: string, title: string, author: string) {
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
  setTitle(input: string) {
    this.title = input;
  }
  setAuthor(input: string) {
    this.author = input;
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
  editBook(id: string, title: string, author: string) {
    let index = this.books.findIndex((a) => a.getId() === id);
    if (index === -1) {
      console.log("Khong tim thay");
      return;
    }
    this.books[index]?.setTitle(title);
    this.books[index]?.setAuthor(author);
  }
  findName(findName: string) {
    let library: Library = new Library(
      this.books.filter((a) =>
        a.getTitle().toLowerCase().includes(findName.toLowerCase())
      )
    );
    if (library.books.length === 0) {
      console.log("Khong tim thay");
      return;
    }
    library.printAllBook();
  }
}
let library: Library = new Library([]);
let book1: Book = new Book("MD1", "Truong ca sang the", "unKnows");
let book2: Book = new Book("MD2", "Nam Thien Mon", "unKnows");
let book3: Book = new Book("MD3", "Mung Tam Thang Chap", "unKnows");
let book4: Book = new Book("MD4", "Frosk Break", "unKnows");
let book5: Book = new Book("MD5", "Star Fall", "unKnows");
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.printAllBook();
library.editBook("33", "33", "33");
library.editBook("MD3", "Quy Dao Di Tien", "unKnows");
library.printAllBook();
library.findName("N");
