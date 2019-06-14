# Book List

This is a project to practice using JavaScript ES5 prototype methods and ES6 classes to create a form that is intended to add books to a list and remove them from that list.

## Validation

If any of the fields in the form are blank, this will return an error and prevent the book from being stored in local memory (AKA LocalStorage). When books are entered, feedback is given via a message that the book was added and when they are deleted a message is also displayed to provide feedback to the user.

## Memory/Cookies (GDPR notes)

The ES6 version of this app employs the browser's local memory, using LocalStorage, so that if the page is reloaded, the books aleady on the list remain.

## Credits

This project was created as a part of a [Traversy Media JavaScript course](https://www.udemy.com/modern-javascript-from-the-beginning/).

## Adjustments

My JS provides the same functionality, but has been refactored in a couple of ways. As I would work on a function, and then check to see if I ended up with the functionality that I was looking for, all bugs and errors are my own.

1. I chose to place variables in a global scope if they were repeatedly accessed. This made the later code a bit cleaner and easier to read.
2. Originally, the alert that a book was deleted popped up any time the list area had been clicked. I was able to adjust the code to only trigger the alert if the delete button (an X in this application) had been clicked.
