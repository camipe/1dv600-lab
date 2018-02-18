(function () {
    "use strict";

    var fs = require('fs');
    var Book = require('./Book');

    // Instructions how to use the xml2js
    // https://github.com/Leonidas-from-XIV/node-xml2js
    var xml2js = require('xml2js');



    // Use this file to write and read the xml file.
    var LibraryDAO = {

        // Get the entire file from the file system.
        readXMLFile: function(callback) {
            var parser = new xml2js.Parser();

            fs.readFile(process.env.PWD + '/books.xml', function(err, data) {
                parser.parseString(data, function (err, result) {                  
                    callback(result);
                });
            });
        },

        // Write the entire file from the file system.
        writeXMLFile: function(data) {
            var builder = new xml2js.Builder();
            var xml = builder.buildObject(data[0]);
            console.log(xml);
        }
    };

    module.exports = LibraryDAO;
}());
