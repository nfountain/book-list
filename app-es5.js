// Variables
const bookForm = document.getElementById('book-form');
const uiTitle = document.getElementById('title');
const uiAuthor = document.getElementById('author');
const uiIsbn = document.getElementById('isbn');
let alreadyAlerted;

// console.log(bookForm, uiTitle, uiAuthor, uiIsbn); // variables are connected

// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
// prototype methods (add book, delete book, show alert) will be added to this constructor
function UI() {}

// Prototype Methods
UI.prototype.showAlert = function(mssg, className) {
  // create div, add classes and textNode with message
  const div = document.createElement('div');
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(mssg));
  // attach div to insert alert
  const container = document.querySelector('.container');
  const form = document.getElementById('book-form');
  container.insertBefore(div, form);
  alreadyAlerted = true;
  // timeout after 3 seconds
  setTimeout(function() {
    document.querySelector('.alert').remove();
    alreadyAlerted = false;
  }, 3000);
};

UI.prototype.addBookToList = function(book) {
  // console.log(book); // returns Book {title: "The funniest book ever", author: "Denise Netterfield", isbn: "1-23-4567890"}
  const list = document.getElementById('book-list');
  // create tbale row with new Book
  const row = document.createElement('tr');
  // console.log(row);
  // insert columns
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `;
  // append the row to the tbody that was not populated in the html
  list.appendChild(row);
};

UI.prototype.clearFields = function() {
  uiTitle.value = '';
  uiAuthor.value = '';
  uiIsbn.value = '';
};

// Event Listener for Add Book
bookForm.addEventListener('submit', function(e) {
  // console.log('works?'); // YAY! test is successful

  // get user-entered form values
  const title = uiTitle.value,
    author = uiAuthor.value,
    isbn = uiIsbn.value;
  // console.log(title, author, isbn); // returns entered values
  // these variables need to be declared so that they work in line with the Book constructor

  // Instantiate a new Book
  const book = new Book(title, author, isbn);
  // console.log(book); // returns the book object with user entered values
  // NOTE: book is not globally accessible outside of this anonymous function

  // Instantiate userInterface
  const userInterface = new UI(); // referring to the UI constructor on line 13

  // Validate entries
  if (title === '' || author === '' || isbn === '') {
    // Error alert
    userInterface.showAlert('Please fill in all of the fields', 'error');
  } else {
    // Add book to list
    userInterface.addBookToList(book);

    // show success
    userInterface.showAlert('Book Added!', 'success');

    // Clear form entry fields
    userInterface.clearFields();
  }

  e.preventDefault();
});

// TODO fix issue where multiple alerts can be inserted.
