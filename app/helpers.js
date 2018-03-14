"use strict";

exports.checkIfBookExistsInXML = (xml, id, callback) => {
  var exists =  xml.catalog.book.some(book => {
    return book.$.id === id;
  });
 
  callback(exists);
}

exports.getLastUsedId = (xml) => {
  var ids = xml.catalog.book.map(book => {
    return Number(book.$.id);
  })

  ids.sort(function(a, b) {
    return b - a;
  });
  return ids[0];
}

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

exports.validateBook = ( req, res, next ) => {
  
  function isEmptyObject(obj) {
    return !Object.keys(obj).length;
  }

  if (req.body.title === "") {
    res.statusCode = 400;
    res.json({"status": "error", "message": "title is missing"});
  } else if (req.body.author === "") {
    res.statusCode = 400;
    res.json({"status": "error", "message": "author is missing"});
  } else if (req.body.genre === "") {
    res.statusCode = 400;
    res.json({"status": "error", "message": "genre is missing"});
  } else if (req.body.publishDate === "") {
    res.statusCode = 400;
    res.json({"status": "error", "message": "publishDate is missing"});
  } else if (req.body.price === "") {
    res.statusCode = 400;
    res.json({"status": "error", "message": "price is missing"});
  } else {
    next();
  }
};
