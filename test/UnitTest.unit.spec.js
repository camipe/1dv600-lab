"use strict";
var expect  = require('chai').expect;
var Book = require('../app/dao/Book');
var removeBookFromXML = require('../app/resources/RemoveBookResource').removeBookFromXML;
var LibraryDAO = require('../app/dao/LibraryDAO');


describe("Automated Unit Tests", () => {

  describe("Unit Test 1 - Book Constructor", () => {

      it("Created new book object", () => {
          var id = 7;
          var title = "The Da Vinci Code";
          var author = "Dan Brown";
          var genre = "Mystery";
          var publishDate = "2003-04-02";
          var price = 139;
          var description = "The Da Vinci Code is a 2003 mystery-detective novel by Dan Brown.";

          var book = new Book(id, title, author, genre, publishDate, price, description);

          expect(book.id).to.equal(id)
          expect(book.title).to.equal(title);
          expect(book.author).to.equal(author);
          expect(book.genre).to.equal(genre);
          expect(book.publishDate).to.equal(publishDate);
          expect(book.price).to.equal(price);
          expect(book.description).to.equal(description);
      });
  });

  //   describe("Unit Test 2 - removeBookFromXML", () => {

  //     it("Removed book from object representation of XML-file", (done) => {
  //       var bookId = 3;  
  //       var xml = LibraryDAO.readXMLFile( () => {
  //         return removeBookFromXML(xml, bookId);
  //         });
          
  //         var result = removeBookFromXML(xml, bookId);

  //         expect(result).to.equal(6);

  //     });
  // });

  describe("Unit Test 3 - addBookToXML", () => {

    it("Added book to object representation of XML-file", () => {
        var a = 2;
        var b = 4;

        var result = 5;

        expect(result).to.equal(6);

    });
  });
});

describe("Automated API Tests", () => {

  describe("Automated API Test 1 - Get Books", () => {

      it("describe..", () => {
          var a = 2;
          var b = 4;

          var result = 5;

          expect(result).to.equal(6);

      });
  });

    describe("Automated API Test 2 - Delete Books", () => {

      it("describe..", () => {
          var a = 2;
          var b = 4;

          var result = 5;

          expect(result).to.equal(6);

      });
  });
});