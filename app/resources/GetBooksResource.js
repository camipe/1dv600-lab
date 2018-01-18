(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    var Book = require('../dao/Book');


    module.exports = function (callback, title) { // The title is optional and is only present when searching. (You need yo modify the books.js file first)
        const bible = new Book(1, 'Bible', 'God', 'Religous', '1337-01-02', 50, "A book to live by");
        const foundation = new Book(2, 'Foundation', 'Isaac Asimov', 'Science Fiction', '1951-08-21', 164, 'About robots and stuff');
        const hp = new Book(3, 'Harry Potter', 'JK Rowling', 'Fantasy', '2001-09-11', 100, 'The story about a magic boy');
        
        const books = [bible, foundation, hp];
        
        console.log(books);
        return bible;
    };

}());
