"use strict";
var expect  = require('chai').expect;
var Book = require('../app/dao/Book');
var helpers = require('../app/helpers');
var LibraryDAO = require('../app/dao/LibraryDAO');
var fs = require('fs');

// load test data


describe("Automated Unit Tests", () => {
  
  var raw;
  var data;

  beforeEach(function(done) {
    raw = fs.readFileSync(process.env.PWD + '/test/Testdata.json');
    data = JSON.parse(raw);
    done();
  })

  describe("Unit Test 1 - Book Constructor", () => {

      it("Created new book object", () => {
          var id = "7";
          var title = "The Da Vinci Code";
          var author = "Dan Brown";
          var genre = "Mystery";
          var publishDate = "2003-04-02";
          var price = "139";
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

  describe("Unit Test 2 - removeBookFromXML", () => {

    it("Removed book from object representation of XML-file", () => {
      var bookId = "9";
      var xmlObject = data.short;
      var expectedResult = data.bookId9Deleted;
      
      var result = helpers.removeBookFromXML(xmlObject, bookId);

      expect(JSON.stringify(result)).to.equal(JSON.stringify(expectedResult));
    });
  });

  describe("Unit Test 3 - addBookToXML", () => {

    it("Added book to object representation of XML-file", () => {
      var book = new Book("11", "Harry Potter and The Prisoner of Azkaban", "J. K. Rowling", "Fantasy", "1999-07-08", "199", "A story about a wizard boy.");
      var xmlObject = data.short;
      var expectedResult = data.bookAdded;

      helpers.addBookToXML(xmlObject, book, (result) => {
        expect(JSON.stringify(result)).to.equal(JSON.stringify(expectedResult));
      });
    });
  });

  // TODO: Unit test for edit book in 
  describe("Unit Test 4 - editBookInXML", () => {

    it("remove and add new book to object representation of XML-file", () => {
      expect(true).to.equal(false);
    });
  });
});
