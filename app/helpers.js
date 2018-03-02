"use strict";

exports.removeBookFromXML = ( xml, id ) => {
  var books = xml.catalog.book;
  
  // remove book with specified id
  var updatedBooks = books.filter((book) => {
      return book.$.id !== id
  });
  
  xml.catalog.book = updatedBooks;
  return xml;
};

exports.addBookToXML = ( xml, book ) => {
  return false;
};