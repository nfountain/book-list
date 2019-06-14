// Variables
const bookForm = document.getElementById('book-form');
const list = document.getElementById('book-list');
const uiTitle = document.getElementById('title');
const uiAuthor = document.getElementById('author');
const uiIsbn = document.getElementById('isbn');

// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

// UI Prototype Methods
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
  // create table row with new Book
  const row = document.createElement('tr');
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

UI.prototype.deleteBook = function(target) {
  // if (target.className === 'delete') {
  target.parentElement.parentElement.remove();
  // }
};

UI.prototype.clearFields = function() {
  uiTitle.value = '';
  uiAuthor.value = '';
  uiIsbn.value = '';
};

// Event Listener for Add Book
bookForm.addEventListener('submit', function(e) {
  // get user-entered form values
  const title = uiTitle.value,
    author = uiAuthor.value,
    isbn = uiIsbn.value;

  // Instantiate a new Book
  const book = new Book(title, author, isbn);

  // Instantiate userInterface
  const userInterface = new UI();

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

// Event Listener for delete
list.addEventListener('click', function(e) {
  if (e.target.className === 'delete') {
    // Instantiate userInterface
    const userInterface = new UI();
    userInterface.deleteBook(e.target);
    userInterface.showAlert('Book removed', 'success');

    e.preventDefault();
  }
});

// TODO fix issue where multiple alerts can be inserted (my preference would be to have new messages blink in and override the previous message).
