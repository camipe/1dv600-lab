(function () {
    "use strict";

    var fs = require('fs');
    var Book = require('./Book');

    // Instructions how to use the xml2js
    // https://github.com/Leonidas-from-XIV/node-xml2js
    var xml2js = require('xml2js');

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

    // Use this file to write and read the xml file.
    var LibraryDAO = {

        // Get the entire file from the file system.
        readXMLFile: function(callback) {
            var parser = new xml2js.Parser();

            fs.readFile(process.env.PWD + '/books.xml', function(err, data) {
                parser.parseString(data, function (err, result) {
                    var bookArray = convertToBooks(result);
                    
                    callback(bookArray);
                });
            });
        },

        // Write the entire file from the file system.
        writeXMLFile: function(data) {

        }
    };

    module.exports = LibraryDAO;
}());
