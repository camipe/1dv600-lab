(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');

    var helpers = require('../helpers');

    module.exports = function (id, callback) {
        // read file
        LibraryDAO.readXMLFile(( result ) => {
            var statusCode;
            var updatedBooks;

            var bookExists = helpers.checkIfBookExistsInXML(result, id, (bookExists) => {
                if (bookExists === true) {
                    statusCode = 200;
                    updatedBooks = helpers.removeBookFromXML(result, id);
                    LibraryDAO.writeXMLFile(updatedBooks);
                } else {
                    statusCode = 404;
                }
            });
            callback(statusCode);
        });
    };

}());
