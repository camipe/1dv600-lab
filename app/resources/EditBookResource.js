(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    var Book = require('../dao/Book');
    var helpers = require('../helpers');

    module.exports = function (id, data, callback) {
        LibraryDAO.readXMLFile(((result) => {;
            var book = new Book(String(id), 
                data.title, 
                data.author, 
                data.genre, 
                data.publish_date, 
                data.price, 
                data.description
            );

            helpers.editBookinXML(result, book, (xml) => {
                LibraryDAO.writeXMLFile(xml);
                callback(book);
            });
        }));
    };

}());
