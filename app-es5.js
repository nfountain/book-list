// Variables
const bookForm = document.getElementById('book-form');

// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
// prototype methods (add book, delete book, show alert) will be added to this constructor
function UI() {}

// Event Listeners
bookForm.addEventListener('submit', function(e) {
  // console.log('works?'); // YAY! test is successful

  // get user-entered form values
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;
  // console.log(title, author, isbn); // returns entered values

  // Instantiate a new Book
  const book = new Book(title, author, isbn);
  // console.log(book); // returns the book object with user entered values
  // NOTE: book is not globally accessible outside of this anonymous function
  e.preventDefault();
});
