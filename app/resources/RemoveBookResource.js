(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');

    var helpers = require('../helpers');

    module.exports = function (id, callback) {
        // read file
        LibraryDAO.readXMLFile(( result ) => {
            var updatedBooks = helpers.removeBookFromXML(result, id);
           
            LibraryDAO.writeXMLFile(updatedBooks);
            
            callback();
        });
    };

}());
