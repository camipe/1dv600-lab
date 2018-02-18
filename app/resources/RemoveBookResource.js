(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');

    module.exports = function (id, callback) {


        // read file
        LibraryDAO.readXMLFile(( books ) => {
            // remove book with specified id
            var updatedBooks = books.filter((book) => {
                return book.id !== id
            });

            LibraryDAO.writeXMLFile(updatedBooks);
            
            callback();
        });

        

        // write file


    };

}());
