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
                data.publish_date, 
                data.price, 
                data.description
            );
            helpers.addBookToXML(result, book, function(xml){
                LibraryDAO.writeXMLFile(xml);
                callback(book);
            })
        });
    };

}());
