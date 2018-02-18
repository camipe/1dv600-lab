(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');


    module.exports = function (id, callback) {


        // read file
        LibraryDAO.readXMLFile(( books ) => {
            var updatedBooks = books.filter((book) => {
                return book.id !== id
            });
            console.log(updatedBooks);
            callback();
        });

        // remove object by id

        // write file


    };

}());
