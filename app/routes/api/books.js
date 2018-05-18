(function () {
    "use strict";

    var express = require('express');
    var router = express.Router();

    var AddBookResource = require('../../resources/AddBookResource');
    var EditBookResource = require('../../resources/EditBookResource');
    var GetBookResource = require('../../resources/GetBookResource');
    var GetBooksResource = require('../../resources/GetBooksResource');
    var RemoveBookResource = require('../../resources/RemoveBookResource');

    var helpers = require('../../helpers');



    router.get('/', function (req, res) {
        res.type('json');

        GetBooksResource(function (data) {
            res.send(data);
        });
    });


    router.put('/', helpers.validateBook, function (req, res) {
        res.type('json');

        AddBookResource(req.body, function (newBook) {
            res.statusCode = 201;
            res.send(newBook);
        });
    });


    router.route('/:bookId')
        .get(function (req, res) {
            res.type('json');
            GetBookResource(req.params.bookId, function (data) {
                res.send(data);
            });
        })

        .post(helpers.validateBook, function (req, res) {
            res.type('json');
            EditBookResource(req.params.bookId, req.body, function (data, statusCode) {
                res.statusCode = statusCode || 200
                res.send(data);
            });
        })

        .delete(function (req, res) {
            res.type('json');
            RemoveBookResource(req.params.bookId, function (statusCode) {
                res.statusCode = statusCode;
                res.send("{}");
            });
        });

    module.exports = router;
}());
