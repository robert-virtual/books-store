import { booksElement, inputElement } from "./elements.js";
import { books, fetchBooks, loadBooks } from "./loadBooks.js";
import { searchBooks } from "./searchBooks.js";

fetchBooks().then(() => {
  loadBooks(booksElement, books);
  searchBooks(inputElement,books,booksElement)
});
// loadBooks(document.querySelector(".books"),books)
