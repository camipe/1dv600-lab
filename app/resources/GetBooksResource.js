(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    var Book = require('../dao/Book');

    // Converts the result from xml2js to an array of my book objects.
    var convertToBooks = ( result ) => {
        var bookNodes = result.catalog.book;
        var bookArray = [];

        bookNodes.forEach(( bookElement ) => {
            var book = new Book(bookElement.$.id, 
                                bookElement.title, 
                                bookElement.author, 
                                bookElement.genre, 
                                bookElement.publish_date, 
                                bookElement.price, 
                                bookElement.description);
            bookArray.push(book);
        });
        return bookArray;
    };

    module.exports = function (callback, title) { // The title is optional and is only present when searching. (You need yo modify the books.js file first)
        var books = LibraryDAO.readXMLFile((result) => {
            callback(convertToBooks(result));
        });
        
    };

}());
