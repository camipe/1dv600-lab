(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    var Book = require('../dao/Book');
    var helpers = require('../helpers')

    module.exports = function (data, callback) {
        LibraryDAO.readXMLFile((result) => {
            var id = helpers.getLastUsedId(result) + 1;
            var book = new Book(String(id), 
                data.title, 
                data.author, 
                data.genre, 
                data.publishDate, 
                data.price, 
                data.description
            );

            helpers.addBookToXML();
            // convert book to xml
            // add book to xmlobj
            // save to xml
            // return book object
            callback(book);
        });
    };

}());
