(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');

    var removeBookFromXML = ( xml, id ) => {
        var books = xml.catalog.book;
        
        // remove book with specified id
        var updatedBooks = books.filter((book) => {
            return book.$.id !== id
        });
        xml.catalog.book = updatedBooks;
        return xml;
    };

    module.exports = function (id, callback) {
        // read file
        LibraryDAO.readXMLFile(( result ) => {
            var updatedBooks = removeBookFromXML(result, id);
           
            LibraryDAO.writeXMLFile(updatedBooks);
            
            callback();
        });
    };

}());
