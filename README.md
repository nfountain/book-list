# Reading List

This is a webapp that creates a book list when books are entered in a form. It allows for removing books from the list, based off of the isbn, as an isbn is typically a unique identifier. (So this would not be useful for inventory of multiples of the same book in its current state.)

Learning goals included Object Oriented Programming with JavaScript, including using ES5 prototype methods and ES6 classes to create the book objects that are dynamically added and removed from a list. JS was also used to trigger different user feedback messages.

## Versions

There are two working versions of the JavaScript. To toggle between the versions, you will need to comment/uncomment the script rows at the end of the html document. The JavaScript files are intended to work independently, so only one script line will need to be uncommented at any time.

1. The [ECMA Script 5 version](app-es5.js) was used primarily to facilitate looking at how JS works, especially in regard to prototype objects and inheriting methods. At this time, this version does not have memory/local storage, so if the page is refreshed, any entered books will be lost.
2. The [ECMA Script 6 version](app-es6-classes.js) was used to refactor the code using ECMA6 constructor classes, including static methods, which were used for accessing local storage.

## Validation

If any of the fields in the form are blank, this will show an error message and prevent the book from being stored in local memory (AKA LocalStorage). When books are entered, feedback is given via a message that the book was added and when they are deleted a message is also displayed to provide feedback to the user.

## Memory/Cookies (GDPR notes)

The ES6 version of this app employs the browser's local memory, using LocalStorage, so that if the page is reloaded, the books already on the list remain.

## Credits

This project was created as a part of a [Traversy Media JavaScript course](https://www.udemy.com/modern-javascript-from-the-beginning/).

## Adjustments

My JS provides the same functionality, but has been refactored in a couple of ways. As I would work on a function, and then check to see if I ended up with the functionality that I was looking for, all bugs and errors are my own.

1. I chose to place variables in a global scope if they were repeatedly accessed. This made the code a bit easier to read.
2. Originally, the alert that a book was deleted popped up any time the list area had been clicked. I was able to adjust the code to only trigger the alert if the delete link (an X in this application) had been clicked.
